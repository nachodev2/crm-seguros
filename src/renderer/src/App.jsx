import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/layout/SplashScreen';

export default function App() {
  const [cargando, setCargando] = useState(true);
  const [procesoActual, setProcesoActual] = useState("Iniciando motor...");

  useEffect(() => {
    // Esta es la función asíncrona real que cargará tus módulos
    const inicializarSistema = async () => {
      try {
        // Fase 1: Acá a futuro validaremos la licencia local
        setProcesoActual("Verificando integridad del sistema...");
        await new Promise(resolve => setTimeout(resolve, 800));

        // Fase 2: Acá irá la conexión real a Supabase (await supabase...)
        setProcesoActual("Conectando a la base de datos central...");
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Fase 3: Acá cargaremos configuraciones del usuario
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
          /* Le inyectamos el estado en tiempo real al Splash */
          <SplashScreen mensajeProceso={procesoActual} />
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col h-screen p-8 items-center justify-center"
          >
            <h1 className="text-3xl text-slate-400 font-bold">Panel Principal Limpio</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}