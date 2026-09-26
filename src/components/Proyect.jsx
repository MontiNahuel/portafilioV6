import React, { useState } from "react";
import ProyectoModal from "./ProyectoModal";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// --- COMPONENTE PRINCIPAL (TARJETA) ---
function Proyect({ id, nombreProyecto, descripcionProyecto, imagenProyecto, estadoProyecto, badge, esDestacado, duracion }) {
  const [verMas, setVerMas] = useState(false);
  const { isV2 } = useTheme();
  const { t } = useLanguage();

  // Función para darle color dinámico al badge de estado
  const getStatusColor = (status) => {
    const s = status ? status.toLowerCase() : "";
    if (s.includes("terminado") || s.includes("finalizado") || s.includes("completed") || s.includes("concluído")) return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    if (s.includes("progreso") || s.includes("desarrollo") || s.includes("actualizaciones") || s.includes("progress") || s.includes("updates")) {
      return isV2 ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20" : "bg-sky-500/10 text-sky-400 border-sky-500/20";
    }
    return "bg-slate-500/10 text-slate-400 border-slate-500/20"; // Default
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <>
      <article 
        onMouseMove={handleMouseMove}
        onClick={() => setVerMas(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setVerMas(true);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Ver detalles del proyecto ${nombreProyecto}`}
        className={`group relative flex flex-col bg-slate-900/40 border border-slate-800/60 rounded-2xl overflow-hidden hover:-translate-y-2 cursor-pointer transition-all duration-500 focus:outline-none ${
          isV2 
            ? 'hover:border-indigo-400/60 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] focus:ring-2 focus:ring-indigo-400/50' 
            : 'hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] focus:ring-2 focus:ring-sky-400/50'
        }`}
      >
        
        {/* Spotlight Effect */}
        <div 
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
          style={{
            background: isV2 
              ? "radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(99,102,241,0.12), transparent 40%)"
              : "radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(56,189,248,0.1), transparent 40%)"
          }}
        />
        
        {/* Imagen con efecto Zoom on Hover */}
        <div className={`relative overflow-hidden bg-slate-800 shrink-0 ${esDestacado ? 'aspect-[16/7]' : 'aspect-video'}`}>
          {badge && (
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-slate-950/90 text-emerald-400 px-3 py-1.5 rounded-lg border border-slate-700/80 shadow-[0_4px_15px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-[pulse_2s_infinite] shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              <span className="text-[11px] font-mono font-bold tracking-widest">{badge}</span>
            </div>
          )}
          {imagenProyecto ? (
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={imagenProyecto} 
              alt={`Imagen del proyecto ${nombreProyecto}`} 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-600">Sin imagen</div>
          )}
          {/* Sombra interna */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
        </div>

        {/* Contenido de la Card */}
        <div className="flex flex-col flex-grow p-6 relative z-10">
          <div className="flex justify-between items-start mb-2">
            <h2 className={`text-2xl text-slate-100 transition-colors leading-tight ${
              isV2 
                ? 'font-medium font-jakarta group-hover:text-indigo-300' 
                : 'font-bold group-hover:text-sky-400'
            }`}>
              {nombreProyecto}
            </h2>
          </div>
          
          {esDestacado && duracion && (
            <div className={`flex items-center gap-1.5 text-xs font-mono mb-4 ${isV2 ? 'text-indigo-400/90' : 'text-sky-400/80'}`}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {duracion}
            </div>
          )}
          
          <p className={`text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow font-light ${isV2 ? 'font-jakarta' : ''}`}>
            {descripcionProyecto}
          </p>
          
          {/* Footer de la Card */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/60">
            <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(estadoProyecto)}`}>
              {estadoProyecto}
            </span>
            <span 
              className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                isV2 
                  ? 'text-slate-300 group-hover:text-indigo-300 font-jakarta' 
                  : 'text-slate-300 group-hover:text-sky-400'
              }`}
            >
              {t("projects.verMas")}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </article>

      {/* Renderizado condicional del Modal */}
      {verMas && <ProyectoModal id={id} onClose={() => setVerMas(false)} />}
    </>
  );
}

export default Proyect;