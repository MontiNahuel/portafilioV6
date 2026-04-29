import React from "react";
import { hipervFooter } from "../data";

export default function Footer() {
  // Obtenemos el año actual automáticamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Fila Superior: Links y Redes */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Navegación Interna */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
            {hipervFooter[0].map((hipervinculo, index) => {
              // Formateamos el href para asegurar que "Sobre Mi" se convierta en "#sobre-mi"
              const href = `#${hipervinculo.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <li key={index}>
                  <a 
                    href={href} 
                    className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {hipervinculo}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Redes Sociales / Links Externos */}
          <ul className="flex items-center gap-4">
            {hipervFooter[1].map((hipervinculo, index) => (
              <li key={index}>
                <a 
                  href={hipervinculo.url} 
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800 transition-all shadow-sm" 
                  target="_blank" 
                  rel="noreferrer noopener"
                  aria-label="Enlace a red social"
                >
                  <img 
                    src={hipervinculo.icono} 
                    alt="" 
                    // El filtro mágico para que los íconos (como LinkedIn o GitHub) se vean blancos y brillen al hover
                    className="w-5 h-5 object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Fila Inferior: Copyright y Firma */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-900/50 text-center md:text-left">
          <span className="text-slate-500 text-sm font-light">
            © {currentYear} Nahuel Monti. Todos los derechos reservados.
          </span>
          
          <span className="text-slate-600 text-xs flex items-center gap-1.5 font-medium">
            Desarrollado con 
            <span className="text-sky-500">React</span> 
            <span className="text-slate-500">&</span> 
            <span className="text-sky-500">Tailwind CSS</span>
          </span>
        </div>

      </div>
    </footer>
  );
}