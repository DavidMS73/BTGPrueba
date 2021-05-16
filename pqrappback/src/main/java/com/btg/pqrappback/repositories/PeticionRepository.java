package com.btg.pqrappback.repositories;

import com.btg.pqrappback.models.Peticion;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface PeticionRepository extends MongoRepository<Peticion, Long> {

    public Peticion findByTitulo(String titulo);

    List<Peticion> findByFechaDeCreacionLessThanOrAreaAdminDioRta(Date fechaDeCreacion, Boolean areaAdminDioRta);
}
