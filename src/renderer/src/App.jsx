import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/layout/SplashScreen';
// 1. Importamos el nuevo Sidebar
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
            <main className="flex-1 flex flex-col overflow-y-auto bg-slate-900">
              <div className="flex-1 flex flex-col items-center justify-center p-8 gap-4">
                <h1 className="text-4xl text-slate-100 font-extrabold tracking-tighter">
                  Tablero <span className="text-blue-500">Principal</span>
                </h1>
                <p className="text-slate-500 max-w-md text-center">
                  La estructura de la aplicación ya está lista. A la izquierda tenés el menú funcional. Al navegar, este contenido central es el que cambiará dinámicamente.
                </p>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}