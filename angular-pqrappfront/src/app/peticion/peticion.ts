export interface Peticion {
  id: Number;
  titulo: String;
  detalle: String;
  fechaDeCreacion: Date;
  areaAdminDioRta: Boolean;
  fechaDeRespuestaAdmin: Date;
  respuestaAreaAdmin: String;

  /*constructor(
    id?: Number,
    titulo?: String,
    detalle?: String,
    fechaDeCreacion?: Date,
    areaAdminDioRta?: Boolean,
    fechaDeRespuestaAdmin?: Date,
    respuestaAreaAdmin?: String
  ) {
    this.idA = id;
    this.titulo = titulo;
    this.detalle = detalle;
    this.fechaDeCreacion = fechaDeCreacion;
    this.areaAdminDioRta = areaAdminDioRta;
    this.fechaDeRespuestaAdmin = fechaDeRespuestaAdmin;
    this.respuestaAreaAdmin = respuestaAreaAdmin;
  }*/
}
