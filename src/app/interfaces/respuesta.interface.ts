import { Insumo } from './insumo.interface';

export interface Respuesta {
  mensaje: string;
  codigoOperacion: number;
  mensajeBackend: string;
  codigoOperacionBackend: number;
  resultados: Insumo[];
  cantidad: number;
}