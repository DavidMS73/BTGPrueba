package com.btg.pqrappback.logic;

import com.btg.pqrappback.models.Peticion;
import com.btg.pqrappback.models.Queja;
import com.btg.pqrappback.models.Reclamo;
import com.btg.pqrappback.repositories.PeticionRepository;
import com.btg.pqrappback.repositories.QuejaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@Service
public class ReclamoLogic {

    @Autowired
    private QuejaRepository quejaRepository;

    @Autowired
    private PeticionRepository peticionRepository;


    public Boolean creacionPermitida(Reclamo reclamo) {
        boolean permitido = false;

        if (reclamo.getIdPeticion() != null) {
            Optional<Peticion> peticionAntigua = peticionRepository.findById(reclamo.getIdPeticion());
            if (!peticionAntigua.isEmpty()) {
                Peticion peticion = peticionAntigua.get();
                Calendar calendar = Calendar.getInstance();
                calendar.setTime(new Date());
                calendar.add(Calendar.DAY_OF_YEAR, -5);
                Date newDate = calendar.getTime();
                if (peticion.getFechaDeCreacion().before(newDate) || peticion.getAreaAdminDioRta()) {
                    permitido = true;
                }
            }
        } else if (reclamo.getIdQueja() != null) {
            Optional<Queja> quejaAntigua = quejaRepository.findById(reclamo.getIdQueja());
            if (!quejaAntigua.isEmpty()) {
                Queja queja = quejaAntigua.get();
                Calendar calendar = Calendar.getInstance();
                calendar.setTime(new Date());
                calendar.add(Calendar.DAY_OF_YEAR, -5);
                Date newDate = calendar.getTime();
                if (queja.getFechaDeCreacion().before(newDate) || queja.getAreaAdminDioRta()) {
                    permitido = true;
                }
            }
        }

        return permitido;
    }
}
