import { Peticion } from '../peticion/peticion';
import { Queja } from '../queja/queja';

export interface ReclamoPeticionResult {
  id: Number;
  idPeticion: Number;
  titulo: String;
  detalle: String;
  fechaDeCreacion: Date;
  areaAdminDioRta: Boolean;
  fechaDeRespuestaAdmin: Date;
  respuestaAreaAdmin: String;
  peticionesQuejas: Array<Peticion>;
}

export interface ReclamoQuejaResult {
  id: Number;ø
  idQueja: Number;
  titulo: String;
  detalle: String;
  fechaDeCreacion: Date;
  areaAdminDioRta: Boolean;
  fechaDeRespuestaAdmin: Date;
  respuestaAreaAdmin: String;
  peticionesQuejas: Array<Queja>;
}

export interface Reclamo {
  id: Number;
  idPeticion: Number;
  idQueja: Number;
  titulo: String;
  detalle: String;
  fechaDeCreacion: Date;
  areaAdminDioRta: Boolean;
  fechaDeRespuestaAdmin: Date;
  respuestaAreaAdmin: String;
}
