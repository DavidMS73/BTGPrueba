package com.btg.pqrappback.repositories;

import com.btg.pqrappback.models.Peticion;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PeticionRepository extends MongoRepository<Peticion, Long> {

    public Peticion findByTitulo(String titulo);
}
