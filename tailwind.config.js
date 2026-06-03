/* eslint-disable */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/renderer/index.html",
    "./src/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- FONDOS Y SUPERFICIES ---
        'crm-bg': '#020617',         // slate-950 (Para el fondo más profundo, como el Sidebar o el Splash)
        'crm-surface': '#0f172a',    // slate-900 (Para el área central de trabajo)
        'crm-card': '#1e293b',       // slate-800 (Para tarjetas, modales y headers)
        'crm-border': '#334155',     // slate-700 (Para dividir secciones de forma sutil)
        
        // --- TEXTOS ---
        'crm-text': '#f1f5f9',       // slate-100 (Texto principal brillante y legible)
        'crm-text-muted': '#94a3b8', // slate-400 (Subtítulos, placeholders y textos secundarios)
        
        // --- MARCA Y ACENTOS ---
        'crm-primary': '#3b82f6',    // blue-500 (Botones principales, íconos activos, logos)
        'crm-primary-hover': '#2563eb', // blue-600 (Para el hover de los botones principales)
        'crm-primary-light': '#60a5fa', // blue-400 (Para destellos o textos de estado activo)
        'crm-accent': '#22d3ee',     // cyan-400 (Para gradientes y toques premium)
        
        // --- ESTADOS (SEMÁFOROS) ---
        'crm-success': '#10b981',    // emerald-500 (Pólizas al día, cobros exitosos)
        'crm-error': '#f43f5e',      // rose-500 (Débitos rechazados, errores de carga)
        'crm-warning': '#f59e0b',    // amber-500 (Alertas de vencimientos próximos)
      }
    },
  },
  plugins: [],
}