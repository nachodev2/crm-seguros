import { limpiarDatosRUS } from './rus';
import { limpiarDatosNacion } from './nacion';
import { limpiarDatosMapfre } from './mapfre';
import { limpiarDatosSP } from './sp';

export const procesadoresExcel = {
  'rus': limpiarDatosRUS,
  'nacion': limpiarDatosNacion,
  'mapfre': limpiarDatosMapfre,
  'sp': limpiarDatosSP,
};