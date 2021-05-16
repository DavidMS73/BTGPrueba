package com.btg.pqrappback.controllers;

import com.btg.pqrappback.models.Counter;
import com.btg.pqrappback.models.Peticion;
import com.btg.pqrappback.models.Queja;
import com.btg.pqrappback.repositories.CounterRepository;
import com.btg.pqrappback.repositories.QuejaRepository;
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
@RequestMapping("/pqr/api/v1/queja")
public class QuejaController {

    @Autowired
    private CounterRepository counterRepository;

    @Autowired
    private QuejaRepository repository;

    @GetMapping
    public List<Queja> list() {
        return repository.findAll();
    }

    @GetMapping
    @RequestMapping("/filter/reclamo")
    public List<Queja> listReclamo() {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.DAY_OF_YEAR, -5);
        Date newDate = calendar.getTime();
        return repository.findByFechaDeCreacionLessThanOrAreaAdminDioRta(newDate, true);
    }


    @GetMapping
    @RequestMapping("{id}")
    public Optional<Queja> get(@PathVariable Long id) {
        return repository.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Queja create(@RequestBody final Queja queja) {
        Optional<Counter> data = counterRepository.findById("radicado_id");
        long newId = data.get().getSeq() + 1;
        data.get().setSeq(newId);
        counterRepository.save(data.get());

        queja.setId(newId);
        queja.setFechaDeCreacion(new Date());
        queja.setAreaAdminDioRta(false);
        return repository.insert(queja);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Queja update(@PathVariable Long id, @RequestBody Queja queja) {
        Optional<Queja> existingSession = repository.findById(id);
        if (existingSession.isEmpty()) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Not found"
            );
        }
        BeanUtils.copyProperties(queja, existingSession.get(), "id", "fechaDeCreacion");
        return repository.save(existingSession.get());
    }
}
