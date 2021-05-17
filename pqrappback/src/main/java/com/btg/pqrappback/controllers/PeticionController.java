package com.btg.pqrappback.controllers;

import com.btg.pqrappback.models.Counter;
import com.btg.pqrappback.models.Peticion;
import com.btg.pqrappback.repositories.CounterRepository;
import com.btg.pqrappback.repositories.PeticionRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pqr/api/v1/peticion")
public class PeticionController {

    @Autowired
    private CounterRepository counterRepository;

    @Autowired
    private PeticionRepository repository;

    @GetMapping
    public List<Peticion> list() {
        return repository.findAll();
    }

    @GetMapping
    @RequestMapping("/filter/reclamo")
    public List<Peticion> listReclamo() {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.DAY_OF_YEAR, -5);
        Date newDate = calendar.getTime();
        return repository.findByFechaDeCreacionLessThanOrAreaAdminDioRta(newDate, true);
    }

    @GetMapping
    @RequestMapping("{id}")
    public Optional<Peticion> get(@PathVariable Long id) {
        return repository.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Peticion create(@RequestBody final Peticion peticion) {
        Optional<Counter> data = counterRepository.findById("radicado_id");
        long newId = data.get().getSeq() + 1;
        data.get().setSeq(newId);
        counterRepository.save(data.get());

        peticion.setId(newId);
        peticion.setFechaDeCreacion(new Date());
        peticion.setAreaAdminDioRta(false);
        return repository.insert(peticion);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Peticion update(@PathVariable Long id, @RequestBody Peticion peticion) {
        Optional<Peticion> existingSession = repository.findById(id);
        if (existingSession.isEmpty()) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Not found"
            );
        }
        BeanUtils.copyProperties(peticion, existingSession.get(), "id", "fechaDeCreacion");
        return repository.save(existingSession.get());
    }
}
