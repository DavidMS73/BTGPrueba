package com.btg.pqrappback.repositories;

import com.btg.pqrappback.models.Counter;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CounterRepository extends MongoRepository<Counter, String> {

}
