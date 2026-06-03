import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function SplashScreen() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
        <Shield className="w-24 h-24 text-blue-500 relative z-10" strokeWidth={1.5} />
      </motion.div>
      
      <h1 className="text-2xl font-bold text-slate-200 tracking-widest uppercase mb-8">
        Seguros<span className="text-blue-500">CRM</span>
      </h1>

      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
        ></motion.div>
      </div>
      <p className="text-slate-500 text-xs mt-4 font-mono">Conectando al sistema...</p>
    </motion.div>
  );
}