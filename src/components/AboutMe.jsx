import React from "react";
import { tecnologiasUsadas } from "../data";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// --- COMPONENTE PRINCIPAL ---
function AboutMe() {
  const { isV2 } = useTheme();
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-24 px-6 relative bg-slate-900 overflow-hidden">
      {/* Detalle Premium: Resplandor sutil de fondo */}
      <div className={`absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] ${isV2 ? 'bg-indigo-900/15' : 'bg-sky-900/10'} blur-[150px] rounded-full pointer-events-none`}></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda: Texto y Descripción */}
        <div className="flex flex-col justify-center">
          <h2 className={`text-sm font-bold tracking-widest uppercase mb-3 ${isV2 ? 'text-indigo-400 font-mono' : 'text-sky-400'}`}>
            {t("about.badge")}
          </h2>
          <h3 className={`text-4xl md:text-5xl ${isV2 ? 'font-normal font-jakarta tracking-wide' : 'font-extrabold tracking-tight'} text-slate-100 mb-6`}>
            {t("about.title")} <span className={`text-transparent bg-clip-text ${isV2 ? 'font-medium bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400' : 'bg-gradient-to-r from-sky-400 to-blue-500'}`}>{t("about.subtitle")}</span>
          </h3>
          
          <div className={`space-y-5 text-slate-400 text-lg font-light leading-relaxed ${isV2 ? 'font-jakarta' : ''}`}>
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
        </div>

        {/* Columna Derecha: Caja de Tecnologías */}
        <TecnologiasMasUsadas isV2={isV2} t={t} />
        
      </div>
    </section>
  );
}

// --- SUB-COMPONENTE: CONTENEDOR DE TECNOLOGÍAS ---
function TecnologiasMasUsadas({ isV2, t }) {
  return (
    <div className="relative group">
      {/* Borde animado (Efecto Glow) */}
      <div className={`absolute -inset-0.5 ${isV2 ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-25 group-hover:opacity-50' : 'bg-gradient-to-r from-sky-500 to-blue-600 opacity-20 group-hover:opacity-40'} rounded-2xl blur transition duration-1000 group-hover:duration-200`}></div>
      
      {/* Contenedor Principal (Glassmorphism) */}
      <div className={`relative p-8 bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl ${isV2 ? 'shadow-indigo-950/30' : ''}`}>
        <h3 className={`text-lg text-slate-200 mb-6 flex items-center gap-3 ${isV2 ? 'font-medium font-jakarta' : 'font-semibold'}`}>
          <svg className={`w-5 h-5 ${isV2 ? 'text-indigo-400' : 'text-sky-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          {t("about.stackTitle")}
        </h3>
        
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {tecnologiasUsadas.map((tecnologia, index) => (
            <Tecnologia 
              key={index} 
              tecnologiaImagen={tecnologia.icono} 
              tecnologiaNombre={tecnologia.nombre} 
              isV2={isV2}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTE: ITEM DE TECNOLOGÍA ---
function Tecnologia({ tecnologiaImagen: IconoTech, tecnologiaNombre, isV2 }) {
  return (
    <li className={`flex flex-col items-center justify-center gap-3 p-4 bg-slate-900/50 border border-slate-800/80 rounded-xl hover:-translate-y-1 transition-all duration-300 group/tech ${
      isV2 
        ? 'hover:border-indigo-400/60 hover:bg-indigo-950/30 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]' 
        : 'hover:border-sky-400/50 hover:bg-slate-800/80'
    }`}>
      <div className="w-10 h-10 flex items-center justify-center">
        {IconoTech ? (
          <IconoTech className={`w-8 h-8 text-slate-500 transition-all duration-300 ${
            isV2 ? 'group-hover/tech:text-indigo-400 group-hover/tech:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'group-hover/tech:text-sky-400'
          }`} />
        ) : (
          <div className="w-8 h-8 bg-slate-700 rounded-full animate-pulse"></div>
        )}
      </div>
      
      <span className={`text-xs text-slate-400 transition-colors text-center ${
        isV2 ? 'font-jakarta font-medium group-hover/tech:text-indigo-300' : 'font-medium group-hover/tech:text-sky-300'
      }`}>
        {tecnologiaNombre}
      </span>
    </li>
  );
}

export default AboutMe;