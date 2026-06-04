import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/layout/SplashScreen';
import Importador from './features/importador/Importador';
import Sidebar from './components/layout/Sidebar';

export default function App() {
  const [cargando, setCargando] = useState(true);
  const [procesoActual, setProcesoActual] = useState("Iniciando motor...");

  useEffect(() => {
    // Función asíncrona de carga (real/simulada)
    const inicializarSistema = async () => {
      try {
        setProcesoActual("Verificando integridad del sistema...");
        await new Promise(resolve => setTimeout(resolve, 800));

        setProcesoActual("Conectando a la base de datos central...");
        await new Promise(resolve => setTimeout(resolve, 1000));

        setProcesoActual("Sincronizando historial de pólizas...");
        await new Promise(resolve => setTimeout(resolve, 700));

        // Fin de la carga
        setCargando(false);
      } catch (error) {
        setProcesoActual("Error crítico de conexión. Reintentando...");
        console.error(error);
      }
    };

    inicializarSistema();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden">
      <AnimatePresence>
        {cargando ? (
          <SplashScreen mensajeProceso={procesoActual} />
        ) : (
          <motion.div
            key="dashboard-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex h-screen bg-slate-900"
          >
            <Sidebar />
            <Importador />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}