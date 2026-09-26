import React from "react";
import { hipervFooter } from "../data";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isV2 } = useTheme();
  const { t, navLinks } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Fila Superior: Links y Redes */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Navegación Interna */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
            {(navLinks || []).map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className={`text-sm font-medium transition-colors ${
                    isV2 ? 'text-slate-400 hover:text-indigo-300 font-jakarta' : 'text-slate-400 hover:text-sky-400'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Redes Sociales / Links Externos */}
          <ul className="flex items-center gap-4">
            {hipervFooter[1].map((hipervinculo, index) => {
              const Icono = hipervinculo.icono;
              return (
              <li key={index}>
                <a 
                  href={hipervinculo.url} 
                  className={`group flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border transition-all shadow-sm ${
                    isV2 
                      ? 'border-slate-800 hover:border-indigo-400/80 hover:bg-indigo-950/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
                      : 'border-slate-800 hover:border-sky-500/50 hover:bg-slate-800'
                  }`} 
                  target="_blank" 
                  rel="noreferrer noopener"
                  aria-label="Enlace a red social"
                >
                  <Icono className={`w-5 h-5 transition-all ${
                    isV2 ? 'text-slate-400 group-hover:text-indigo-300 group-hover:scale-110' : 'text-slate-400 group-hover:text-white group-hover:scale-110'
                  }`} />
                </a>
              </li>
            )})}
          </ul>
        </div>

        {/* Fila Inferior: Copyright y Firma */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-900/50 text-center md:text-left">
          <span className={`text-slate-500 text-sm font-light ${isV2 ? 'font-jakarta' : ''}`}>
            © {currentYear} Nahuel Monti. {t("footer.rights")}
          </span>
          
          <span className={`text-slate-600 text-xs flex items-center gap-1.5 font-medium ${isV2 ? 'font-jakarta' : ''}`}>
            {t("footer.builtWith")} 
            <span className={isV2 ? 'text-indigo-400 font-mono' : 'text-sky-500'}>React</span> 
            <span className="text-slate-500">&</span> 
            <span className={isV2 ? 'text-indigo-400 font-mono' : 'text-sky-500'}>Tailwind CSS</span>
          </span>
        </div>

      </div>
    </footer>
  );
}