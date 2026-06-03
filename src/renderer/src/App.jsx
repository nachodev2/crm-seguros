import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/layout/SplashScreen';
// Importaremos el Dashboard y el Navbar desde features más adelante

export default function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden">
      <AnimatePresence>
        {cargando ? (
          <SplashScreen />
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col h-screen p-8 items-center justify-center"
          >
            {/* Acá irán los componentes reales del CRM */}
            <h1 className="text-3xl text-slate-400 font-bold">Panel Principal Limpio</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}