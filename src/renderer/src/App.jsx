import { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, UploadCloud } from 'lucide-react';

function App() {
  const [compania, setCompania] = useState('');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col justify-between">
      {/* Navbar Minimalista */}
      <header className="bg-slate-800 border-b border-slate-700 p-4 flex items-center gap-3 shadow-lg">
        <Shield className="text-blue-500 w-8 h-8" />
        <h1 className="text-xl font-bold tracking-wide">
          SegurosCRM <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/30">v1.0</span>
        </h1>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start mt-6">
        
        {/* Panel Izquierdo: Importador */}
        <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-md md:col-span-1">
          <h2 className="text-lg font-semibold mb-4 text-slate-200 flex items-center gap-2">
            <UploadCloud className="text-slate-400 w-5 h-5" /> Importador
          </h2>
          
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Compañía
          </label>
          <select
            value={compania}
            onChange={(e) => setCompania(e.target.value)}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition-colors mb-4"
          >
            <option value="">-- Seleccionar --</option>
            <option value="Federacion">Federación Patronal</option>
            <option value="Rivadavia">Rivadavia Seguros</option>
          </select>

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-all shadow-md active:scale-95">
            Cargar Excel
          </button>
        </div>

        {/* Panel Derecho: Métricas */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Card 1 */}
          <div className="bg-slate-800 border border-rose-500/30 p-5 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-rose-500/10 rounded-lg border border-rose-500/20 text-rose-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Débitos Rechazados</p>
              <h3 className="text-2xl font-bold text-rose-400 mt-0.5">14</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 border border-emerald-500/30 p-5 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-emerald-400">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Pólizas a Enviar</p>
              <h3 className="text-2xl font-bold text-emerald-400 mt-0.5">32</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;