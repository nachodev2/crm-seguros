import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileSpreadsheet } from "lucide-react";
import * as XLSX from "xlsx";


const limpiarDatosRUS = (datosCrudos) => {
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


export default function Importador() {
  const [archivo, setArchivo] = useState(null);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const excelSubido = acceptedFiles[0];
      setArchivo(excelSubido);

      const reader = new FileReader();
      
      reader.onload = (e) => {
        const fileContent = e.target.result;
        const workbook = XLSX.read(fileContent, { type: 'array' });
        const nombrePrimeraHoja = workbook.SheetNames[0];
        const hoja = workbook.Sheets[nombrePrimeraHoja];
        const datosJSON = XLSX.utils.sheet_to_json(hoja);
        
        const datosLimpios = limpiarDatosRUS(datosJSON);
        console.log(datosLimpios);
      };
      
      reader.readAsArrayBuffer(excelSubido); 
    }   
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // Aceptamos formatos de Excel
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls']
    },
    multiple: false // Por ahora, que se suba de a un archivo a la vez
  });

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-crm-text mb-6 flex items-center gap-2">
        <UploadCloud className="text-crm-primary" />
        Importar Liquidaciones
      </h2>

      {/* Zona de Arrastre */}
      <div 
        {...getRootProps()} 
        className={`
          flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300
          ${isDragActive 
            ? 'border-crm-primary bg-crm-primary/10' // Estado cuando le pasás el archivo por encima
            : 'border-crm-border bg-crm-card hover:border-crm-primary-light hover:bg-crm-surface'}
        `}
      >
        <input {...getInputProps()} />
        
        <FileSpreadsheet className={`w-16 h-16 mb-4 ${isDragActive ? 'text-crm-primary' : 'text-crm-text-muted'}`} />
        
        {isDragActive ? (
          <p className="text-crm-primary font-medium text-lg">¡Soltalo acá!</p>
        ) : (
          <div className="text-center">
            <p className="text-crm-text font-medium text-lg mb-1">
              Arrastrá el Excel de la compañía aseguradora
            </p>
            <p className="text-crm-text-muted text-sm">
              o hacé clic para buscar en tu PC (.xlsx, .xls)
            </p>
          </div>
        )}
      </div>

      {/* Feedback visual si hay un archivo cargado */}
      {archivo && (
        <div className="mt-6 p-4 bg-crm-success/10 border border-crm-success/30 rounded-xl flex items-center gap-3">
          <FileSpreadsheet className="text-crm-success w-6 h-6" />
          <div>
            <p className="text-crm-success font-medium text-sm">Archivo listo para procesar:</p>
            <p className="text-crm-text-muted text-xs">{archivo.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}