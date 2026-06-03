import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, LayoutGrid, UploadCloud, FileText, 
  Users, Settings, HelpCircle, LogOut 
} from 'lucide-react';


const navLinks = [
  { name: 'Tablero Principal', icon: LayoutGrid, feature: 'dashboard' },
  { name: 'Cargar Excel', icon: UploadCloud, feature: 'importador' },
  { name: 'Gestión de Pólizas', icon: FileText, feature: 'polizas' },
  { name: 'Base de Clientes', icon: Users, feature: 'clientes' },
];

const secondaryLinks = [
  { name: 'Configuración', icon: Settings },
  { name: 'Soporte Técnico', icon: HelpCircle },
];

export default function Sidebar() {
  const [activeFeature, setActiveFeature] = useState('dashboard');

  return (
    <aside className="w-64 h-screen bg-slate-950 flex flex-col border-r border-slate-800/50 p-4">
      
      {/* 1. HEADER: Logo e Identidad */}
      <div className="flex items-center gap-3 px-3 py-4 mb-8 border-b border-slate-800/50">
        <Shield className="w-7 h-7 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" strokeWidth={1.5} />
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-slate-100 tracking-wider">
            Seguros<span className="text-blue-500">CRM</span>
          </h1>
          <p className="text-[10px] font-mono text-slate-500 -mt-1">v1.0.0 (nachodev2)</p>
        </div>
      </div>

      {/* 2. NAVEGACIÓN PRINCIPAL */}
      <nav className="flex-1 flex flex-col gap-2">
        <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-widest px-4 mb-1">
          Menú Principal
        </p>
        {navLinks.map((item) => {
          const isActive = activeFeature === item.feature;
          return (
            <button
              key={item.name}
              onClick={() => setActiveFeature(item.feature)}
              className={`
                group flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-sm font-medium
                transition-all duration-300 relative overflow-hidden
                ${isActive 
                  ? 'text-blue-400 bg-blue-600/10 shadow-[inset_0_0_12px_rgba(59,130,246,0.1)]' 
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100'}
              `}
            >
              {/* Indicador de estado activo */}
              {isActive && (
                <motion.div 
                  layoutId="activeNavIndicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <item.icon className={`w-5 h-5 transition-colors ${isActive ? 'text-blue-500' : 'text-slate-500 group-hover:text-blue-400'}`} strokeWidth={1.5} />
              {item.name}
            </button>
          );
        })}

        {/* Separador sutil */}
        <div className="my-6 border-t border-slate-800/50" />

        {/* 3. NAVEGACIÓN SECUNDARIA / SISTEMA */}
        <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-widest px-4 mb-1">
          Sistema
        </p>
        {secondaryLinks.map((item) => (
          <button
            key={item.name}
            className="group flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800/60 hover:text-slate-100 transition-all duration-300"
          >
            <item.icon className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" strokeWidth={1.5} />
            {item.name}
          </button>
        ))}
      </nav>

      {/* 4. FOOTER: Perfil de Usuario y Cerrar Sesión */}
      <div className="mt-auto border-t border-slate-800/50 pt-4 pb-2 px-1">
        <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-2xl border border-slate-800/50 mb-3 shadow-inner">
          {/* Avatar genérico (PA = Productor Asesor) */}
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-blue-100 text-sm shadow-md border-2 border-blue-400/20">
            PA
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-slate-100">Productor Asesor</p>
            <p className="text-xs text-slate-500 font-mono">Licencia Activa</p>
          </div>
        </div>

        <button className="w-full group flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-950/50 transition-all duration-300">
          <LogOut className="w-5 h-5 text-rose-500 group-hover:rotate-[-10deg] transition-transform" strokeWidth={1.5} />
          Cerrar Sistema
        </button>
      </div>

    </aside>
  );
}