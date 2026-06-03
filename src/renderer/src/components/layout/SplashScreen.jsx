import { motion } from 'framer-motion';
import { Shield, Activity, Code } from 'lucide-react';

export default function SplashScreen({ mensajeProceso }) {
  // Variantes formales y elegantes para el texto (sin rebote cartoon)
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.6 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } // Curva de aceleración premium
    }
  };

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }} // Salida con desenfoque cinematográfico
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Fondo interactivo / Aura de luz giratoria */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Conjunto del Logo Principal */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 14, stiffness: 100, delay: 0.2 }}
        className="relative mb-6 z-10 flex items-center justify-center"
      >
        {/* Sombra proyectada del escudo */}
        <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-40 rounded-full animate-pulse"></div>
        
        <Shield className="w-28 h-28 text-blue-500 relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" strokeWidth={1.2} />
        
        {/* Ícono secundario que aparece adentro del escudo */}
        <motion.div
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ type: "spring", delay: 1.2 }}
           className="absolute z-20"
        >
          <Activity className="w-10 h-10 text-slate-100" strokeWidth={2} />
        </motion.div>
      </motion.div>
      
      {/* Texto Tipográfico Corporativo (Palabra por palabra) */}
      <motion.div 
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-3 text-4xl font-bold tracking-widest uppercase mb-12 z-10 drop-shadow-lg"
      >
        <motion.span variants={wordVariants} className="text-slate-100">
          SEGUROS
        </motion.span>
        <motion.span 
          variants={wordVariants} 
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          CRM
        </motion.span>
      </motion.div>

      {/* Contenedor de la barra y el porcentaje dinámico */}
      <div className="flex flex-col items-center z-10 w-72">
        <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden backdrop-blur-md border border-slate-700/50 mb-3">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "circOut", delay: 0.5 }}
            className="h-full relative bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-500 rounded-full"
          >
            {/* Destello blanco en la punta de la barra */}
            <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/60 blur-[3px]"></div>
          </motion.div>
        </div>
        
        {/* Mensaje dinámico inyectado desde App.jsx */}
        <p className="text-blue-400/80 text-xs font-mono tracking-widest uppercase h-4 transition-all duration-300">
          {mensajeProceso}
        </p>
      </div>

      {/* Footer de Licencia Comercial y Firma */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center text-xs text-slate-500 font-mono z-10"
      >
        <p>Versión 1.0.0 (Desktop)</p>
        <p className="mt-1 mb-3">Licencia comercial otorgada a: <span className="text-slate-300 font-semibold">Productor Asesor</span></p>
        
        {/* Firma de desarrollador */}
        <a 
          href="https://github.com/nachodev2" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-1 bg-slate-900/50 border border-slate-700/50 rounded-full text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
        >
          <Code className="w-3.5 h-3.5" />
          <span>@nachodev2</span>
        </a>
      </motion.div>
    </motion.div>
  );
}