package com.btg.pqrappback.repositories;

import com.btg.pqrappback.models.Reclamo;
import com.btg.pqrappback.models.ReclamoPeticionQuejaResult;

import java.util.List;

public interface ReclamoCustomRepository {

    List<ReclamoPeticionQuejaResult> findAllByReclamoIdAndPeticionReclamoId();


    List<ReclamoPeticionQuejaResult> findAllByReclamoIdAndQuejaReclamoId();
}
