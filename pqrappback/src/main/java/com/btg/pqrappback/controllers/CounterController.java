package com.btg.pqrappback.controllers;

import com.btg.pqrappback.models.Counter;
import com.btg.pqrappback.repositories.CounterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pqr/api/v1/counter")
public class CounterController {

    @Autowired
    private CounterRepository repository;

    @GetMapping
    public List<Counter> list() {
        return repository.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Optional<Counter> get(@PathVariable String id) {
        return repository.findById(id);
    }

    @RequestMapping(value = "add/{id}", method = RequestMethod.PUT)
    public Counter getAndModify(@PathVariable String id) {
        Optional<Counter> data = repository.findById(id);
        data.get().setSeq(data.get().getSeq() + 1);
        return repository.save(data.get());
    }

}
