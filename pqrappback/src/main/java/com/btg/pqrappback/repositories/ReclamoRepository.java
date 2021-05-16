package com.btg.pqrappback.repositories;

import com.btg.pqrappback.models.Reclamo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReclamoRepository extends MongoRepository<Reclamo, Long> {
}
