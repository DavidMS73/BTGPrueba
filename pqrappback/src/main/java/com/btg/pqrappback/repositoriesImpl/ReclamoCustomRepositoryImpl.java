package com.btg.pqrappback.repositoriesImpl;

import com.btg.pqrappback.models.ReclamoPeticionQuejaResult;
import com.btg.pqrappback.repositories.ReclamoCustomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.LookupOperation;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReclamoCustomRepositoryImpl implements ReclamoCustomRepository {
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<ReclamoPeticionQuejaResult> findAllByReclamoIdAndPeticionReclamoId() {
        LookupOperation lookupOperation = LookupOperation.newLookup()
                .from("peticion")
                .localField("idPeticion")
                .foreignField("_id")
                .as("peticionesQuejas");

        Aggregation aggregation = Aggregation.newAggregation(lookupOperation);
        List<ReclamoPeticionQuejaResult> results = mongoTemplate.aggregate(aggregation, "reclamo", ReclamoPeticionQuejaResult.class).getMappedResults();

        return results;
    }

    @Override
    public List<ReclamoPeticionQuejaResult> findAllByReclamoIdAndQuejaReclamoId() {
        LookupOperation lookupOperation = LookupOperation.newLookup()
                .from("queja")
                .localField("idQueja")
                .foreignField("_id")
                .as("peticionesQuejas");

        Aggregation aggregation = Aggregation.newAggregation(lookupOperation);
        List<ReclamoPeticionQuejaResult> results = mongoTemplate.aggregate(aggregation, "reclamo", ReclamoPeticionQuejaResult.class).getMappedResults();

        return results;
    }
}
