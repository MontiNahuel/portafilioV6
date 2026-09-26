import React from "react";
import { useTheme } from "../context/ThemeContext";

// --- SUB-COMPONENTE: ITEM DE EXPERIENCIA LABORAL ---
export default function ExperienciaItem({ puesto, empresa, logoEmpresa, modalidad, periodo, descripcion, logros, tecnologias, esPrimero }) {
  const { isV2 } = useTheme();

  return (
    <div className="relative pl-9 sm:pl-12 mb-8 group last:mb-0">
      
      {/* Nodo con efecto de luz */}
      <div className={`absolute left-3.5 sm:left-4 top-1.5 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-950 border-2 transition-all ${
        isV2 
          ? esPrimero 
            ? 'border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]' 
            : 'border-purple-400/80 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]'
          : esPrimero 
            ? 'border-sky-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.5)]' 
            : 'border-blue-500 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.5)]'
      } flex items-center justify-center z-10 group-hover:scale-110`}>
        <span className={`w-1.5 h-1.5 rounded-full ${
          isV2 
            ? esPrimero ? 'bg-indigo-400' : 'bg-purple-400'
            : esPrimero ? 'bg-sky-400' : 'bg-blue-500'
        }`}></span>
      </div>

      {/* Tarjeta Compacta */}
      <div className={`p-5 sm:p-6 ${isV2 ? 'rounded-2xl bg-slate-900/40 backdrop-blur-sm border-slate-800/80 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]' : 'rounded-xl bg-slate-900/60 border-slate-800/80 hover:border-sky-500/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.08)]'} border transition-all duration-300`}>
        
        {/* Encabezado del Puesto */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
          <div>
            <h4 className={`text-lg sm:text-xl text-white ${
              isV2 
                ? 'font-jakarta font-medium group-hover:text-indigo-300' 
                : 'font-bold ' + (esPrimero ? 'group-hover:text-sky-300' : 'group-hover:text-blue-300')
            } transition-colors`}>
              {puesto}
            </h4>
            <div className={`${
              isV2 ? 'text-indigo-400 font-jakarta' : (esPrimero ? 'text-sky-400' : 'text-blue-400')
            } font-medium text-xs flex items-center gap-2 mt-1`}>
              {logoEmpresa && (
                <span className="p-1 rounded-lg bg-slate-950 border border-slate-800/90 shadow-sm flex items-center justify-center shrink-0 group-hover:border-slate-700 transition-colors">
                  <img 
                    src={logoEmpresa} 
                    alt={`Logo ${empresa}`} 
                    className="w-4 h-4 object-contain" 
                  />
                </span>
              )}
              <span>{empresa} {modalidad && `• ${modalidad}`}</span>
            </div>
          </div>
          <span className={`text-xs font-mono font-medium self-start sm:self-auto px-2.5 py-0.5 rounded border transition-all ${
            isV2 
              ? 'text-indigo-300 bg-indigo-950/40 border-indigo-500/30 shadow-inner' 
              : 'text-slate-400 bg-slate-950 border-slate-800/80'
          }`}>
            {periodo}
          </span>
        </div>

        {/* Resumen Breve */}
        {descripcion && (
          <p className={`text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 ${isV2 ? 'font-jakarta font-light' : ''}`}>
            {descripcion}
          </p>
        )}

        {/* Logros / Responsabilidades Clave */}
        {logros && logros.length > 0 && (
          <ul className={`space-y-1.5 mb-4 text-xs text-slate-400 ${isV2 ? 'font-jakarta font-light' : ''}`}>
            {logros.map((logro, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className={`${isV2 ? 'text-indigo-400' : (esPrimero ? 'text-sky-400' : 'text-blue-400')} font-bold`}>•</span>
                <span>{logro}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Stack Tecnológico */}
        {tecnologias && tecnologias.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-800/60">
            {tecnologias.map((tech, idx) => (
              <span 
                key={idx}
                className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded-md transition-all ${
                  isV2
                    ? 'bg-indigo-950/50 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-400 hover:text-white'
                    : esPrimero 
                      ? 'bg-sky-500/10 text-sky-300 border border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-400' 
                      : 'bg-blue-500/10 text-blue-300 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
