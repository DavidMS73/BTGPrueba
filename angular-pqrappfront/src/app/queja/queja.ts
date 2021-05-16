export interface Queja {
  id: number;
  titulo: string;
  detalle: string;
  fechaDeCreacion: Date;
  areaAdminDioRta: boolean;
  fechaDeRespuestaAdmin: Date;
  respuestaAreaAdmin: string;
}
