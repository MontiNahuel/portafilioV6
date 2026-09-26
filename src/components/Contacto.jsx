import React from "react";
import FormContacto from "./FormContacto";
import DatosContacto from "./DatosContacto";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Contacto() {
  const { isV2 } = useTheme();
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-24 px-6 relative bg-slate-900 overflow-hidden">
      {/* Resplandor de fondo para mantener la coherencia con "Sobre Mí" */}
      <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] ${isV2 ? 'bg-indigo-900/15' : 'bg-blue-900/10'} blur-[150px] rounded-full pointer-events-none`}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className={`text-sm font-bold tracking-widest uppercase mb-3 ${isV2 ? 'text-indigo-400 font-mono' : 'text-sky-400'}`}>
            {t("contact.badge")}
          </h2>
          <h3 className={`text-4xl md:text-5xl ${isV2 ? 'font-normal font-jakarta tracking-wide' : 'font-extrabold tracking-tight'} text-slate-100`}>
            {t("contact.title")} <span className={`text-transparent bg-clip-text ${isV2 ? 'font-medium bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400' : 'bg-gradient-to-r from-sky-400 to-blue-500'}`}>{t("contact.subtitle")}</span>
          </h3>
          <p className={`mt-4 text-slate-400 max-w-xl mx-auto font-light leading-relaxed ${isV2 ? 'font-jakarta' : ''}`}>
            {t("contact.description")}
          </p>
        </div>

        {/* Layout Dividido (Grid 5 columnas: 3 para el form, 2 para los datos) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Columna Izquierda: Formulario */}
          <div className={`lg:col-span-3 bg-slate-950/50 border border-slate-800/60 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm ${isV2 ? 'shadow-indigo-950/30' : ''}`}>
            <FormContacto />
          </div>

          {/* Columna Derecha: Tarjetas de Datos */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <DatosContacto />
          </div>

        </div>
      </div>
    </section>
  );
}