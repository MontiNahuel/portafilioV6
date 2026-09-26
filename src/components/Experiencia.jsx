import React from "react";
import ExperienciaItem from "./ExperienciaItem";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// --- COMPONENTE CONTENEDOR (Experiencia.jsx) ---
export default function Experiencia() {
  const { isV2 } = useTheme();
  const { t, experienciaLaboral } = useLanguage();

  return (
    <section id="experiencia" className="py-24 px-6 relative bg-slate-950">
      {/* Detalle Premium: Línea divisoria superior sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Encabezado de la Sección */}
        <div className="text-center mb-16">
          <h2 className={`text-sm font-bold tracking-widest uppercase mb-3 ${isV2 ? 'text-indigo-400 font-mono' : 'text-sky-400'}`}>
            {t("experience.badge")}
          </h2>
          <h3 className={`text-4xl md:text-5xl ${isV2 ? 'font-normal font-jakarta tracking-wide' : 'font-extrabold tracking-tight'} text-slate-100`}>
            {t("experience.title")} <span className={`text-transparent bg-clip-text ${isV2 ? 'font-medium bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400' : 'bg-gradient-to-r from-sky-400 to-blue-500'}`}>{t("experience.subtitle")}</span>
          </h3>
        </div>

        {/* Contenedor de Línea de Tiempo */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Línea vertical conectora */}
          <div className={`absolute left-3.5 sm:left-4 top-3 bottom-3 w-0.5 ${isV2 ? 'bg-gradient-to-b from-indigo-400 via-purple-500 to-slate-800/60' : 'bg-gradient-to-b from-sky-400 via-blue-500 to-slate-800'}`}></div>

          {/* Lista de Experiencias */}
          {experienciaLaboral && experienciaLaboral.map((item, index) => (
            <ExperienciaItem 
              key={item.id || index} 
              {...item} 
              esPrimero={index === 0} 
            />
          ))}

        </div>

      </div>
    </section>
  );
}
