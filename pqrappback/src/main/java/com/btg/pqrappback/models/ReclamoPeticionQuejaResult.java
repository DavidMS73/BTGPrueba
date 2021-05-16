package com.btg.pqrappback.models;

import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;

public class ReclamoPeticionQuejaResult {

    @Id
    private Long id;

    private Long idPeticion;
    private Long idQueja;

    private String titulo;
    private String detalle;
    private Date fechaDeCreacion;
    private Boolean areaAdminDioRta;
    private Date fechaDeRespuestaAdmin;
    private String respuestaAreaAdmin;

    private List<Object> peticionesQuejas;

    public ReclamoPeticionQuejaResult() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdPeticion() {
        return idPeticion;
    }

    public void setIdPeticion(Long idPeticion) {
        this.idPeticion = idPeticion;
    }

    public Long getIdQueja() {
        return idQueja;
    }

    public void setIdQueja(Long idQueja) {
        this.idQueja = idQueja;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDetalle() {
        return detalle;
    }

    public void setDetalle(String detalle) {
        this.detalle = detalle;
    }

    public Date getFechaDeCreacion() {
        return fechaDeCreacion;
    }

    public void setFechaDeCreacion(Date fechaDeCreacion) {
        this.fechaDeCreacion = fechaDeCreacion;
    }

    public Boolean getAreaAdminDioRta() {
        return areaAdminDioRta;
    }

    public void setAreaAdminDioRta(Boolean areaAdminDioRta) {
        this.areaAdminDioRta = areaAdminDioRta;
    }

    public Date getFechaDeRespuestaAdmin() {
        return fechaDeRespuestaAdmin;
    }

    public void setFechaDeRespuestaAdmin(Date fechaDeRespuestaAdmin) {
        this.fechaDeRespuestaAdmin = fechaDeRespuestaAdmin;
    }

    public String getRespuestaAreaAdmin() {
        return respuestaAreaAdmin;
    }

    public void setRespuestaAreaAdmin(String respuestaAreaAdmin) {
        this.respuestaAreaAdmin = respuestaAreaAdmin;
    }

    public List<Object> getPeticionesQuejas() {
        return peticionesQuejas;
    }

    public void setPeticionesQuejas(List<Object> peticionesQuejas) {
        this.peticionesQuejas = peticionesQuejas;
    }
}
