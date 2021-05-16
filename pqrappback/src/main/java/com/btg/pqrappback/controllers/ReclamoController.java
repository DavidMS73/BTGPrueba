package com.btg.pqrappback.controllers;

import com.btg.pqrappback.logic.ReclamoLogic;
import com.btg.pqrappback.models.Counter;
import com.btg.pqrappback.models.Reclamo;
import com.btg.pqrappback.models.ReclamoPeticionQuejaResult;
import com.btg.pqrappback.repositories.CounterRepository;
import com.btg.pqrappback.repositories.ReclamoCustomRepository;
import com.btg.pqrappback.repositories.ReclamoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pqr/api/v1/reclamo")
public class ReclamoController {

    @Autowired
    private CounterRepository counterRepository;

    @Autowired
    private ReclamoRepository repository;

    @Autowired
    private ReclamoCustomRepository reclamoCustomRepository;

    @Autowired
    private ReclamoLogic reclamoLogic;

    @GetMapping
    public List<Reclamo> list() {
        return repository.findAll();
    }


    @GetMapping
    @RequestMapping("{id}")
    public Optional<Reclamo> get(@PathVariable Long id) {
        return repository.findById(id);
    }


    @GetMapping
    @RequestMapping("/lookup/peticion")
    public List<ReclamoPeticionQuejaResult> getReclamoPeticion() {
        return reclamoCustomRepository.findAllByReclamoIdAndPeticionReclamoId();
    }

    @GetMapping
    @RequestMapping("/lookup/queja")
    public List<ReclamoPeticionQuejaResult> getReclamoQueja() {
        return reclamoCustomRepository.findAllByReclamoIdAndQuejaReclamoId();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Reclamo create(@RequestBody final Reclamo reclamo) {
        boolean permitido = reclamoLogic.creacionPermitida(reclamo);
        if (!permitido) {
            throw new ResponseStatusException(
                    HttpStatus.FORBIDDEN, "Not allowed"
            );
        }
        Optional<Counter> data = counterRepository.findById("radicado_id");
        long newId = data.get().getSeq() + 1;
        data.get().setSeq(newId);
        counterRepository.save(data.get());

        reclamo.setId(newId);
        reclamo.setFechaDeCreacion(new Date());
        reclamo.setAreaAdminDioRta(false);
        return repository.insert(reclamo);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Reclamo update(@PathVariable Long id, @RequestBody Reclamo reclamo) {
        Optional<Reclamo> existingSession = repository.findById(id);
        System.out.println(existingSession.isEmpty());
        if (existingSession.isEmpty()) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Not found"
            );
        }
        BeanUtils.copyProperties(reclamo, existingSession.get(), "id", "fechaDeCreacion");
        return repository.save(existingSession.get());
    }
}
