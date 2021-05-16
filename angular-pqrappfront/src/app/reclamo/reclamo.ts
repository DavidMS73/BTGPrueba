import { Peticion } from '../peticion/peticion';
import { Queja } from '../queja/queja';

export interface ReclamoPeticionResult {
  id: number;
  idPeticion: number;
  titulo: string;
  detalle: string;
  fechaDeCreacion: Date;
  areaAdminDioRta: boolean;
  fechaDeRespuestaAdmin: Date;
  respuestaAreaAdmin: string;
  peticionesQuejas: Array<Peticion>;
}

export interface ReclamoQuejaResult {
  id: number;
  idQueja: number;
  titulo: string;
  detalle: string;
  fechaDeCreacion: Date;
  areaAdminDioRta: boolean;
  fechaDeRespuestaAdmin: Date;
  respuestaAreaAdmin: string;
  peticionesQuejas: Array<Queja>;
}

export interface Reclamo {
  id: number;
  idPeticion: number;
  idQueja: number;
  titulo: string;
  detalle: string;
  fechaDeCreacion: Date;
  areaAdminDioRta: boolean;
  fechaDeRespuestaAdmin: Date;
  respuestaAreaAdmin: string;
}
