export const limpiarDatosRUS = (datosCrudos) => {
  return datosCrudos
    .slice(5)
    .map(fila => {
      const columnaPrincipal = fila['__EMPTY_1'] || "";
      const partes = columnaPrincipal.split('\n');
      
      return {
        poliza: partes[0] ? partes[0].trim() : "",
        asegurado: partes[1] ? partes[1].trim() : "",
        restoDeDatos: fila
      };
    })
    .filter(cliente => cliente.poliza !== "");
};