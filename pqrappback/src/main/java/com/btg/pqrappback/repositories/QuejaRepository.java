package com.btg.pqrappback.repositories;

import com.btg.pqrappback.models.Queja;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuejaRepository extends MongoRepository<Queja, Long> {
}
