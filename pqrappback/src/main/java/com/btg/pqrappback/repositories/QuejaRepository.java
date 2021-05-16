package com.btg.pqrappback.repositories;

import com.btg.pqrappback.models.Queja;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface QuejaRepository extends MongoRepository<Queja, Long> {

    List<Queja> findByFechaDeCreacionLessThanOrAreaAdminDioRta(Date fechaDeCreacion, Boolean areaAdminDioRta);
}
