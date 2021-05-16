package com.btg.pqrappback.models;

import org.springframework.data.annotation.Id;

import java.util.Date;


public class Queja {

    @Id
    private Long id;

    private String titulo;
    private String detalle;
    private Date fechaDeCreacion;
    private Boolean areaAdminDioRta;
    private Date fechaDeRespuestaAdmin;
    private String respuestaAreaAdmin;

    public Queja() {
    }

    public Queja(String titulo, String detalle, Date fechaDeCreacion, Boolean areaAdminDioRta, Date fechaDeRespuestaAdmin, String respuestaAreaAdmin) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.fechaDeCreacion = fechaDeCreacion;
        this.areaAdminDioRta = areaAdminDioRta;
        this.fechaDeRespuestaAdmin = fechaDeRespuestaAdmin;
        this.respuestaAreaAdmin = respuestaAreaAdmin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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


    @Override
    public String toString() {
        return String.format(
                "Queja[id=%s, titulo='%s']",
                id, titulo);
    }
}
