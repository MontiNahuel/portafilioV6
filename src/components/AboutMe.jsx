import React from "react";
import { tecnologiasUsadas } from "../data";

// --- COMPONENTE PRINCIPAL ---
function AboutMe() {
  return (
    <section id="sobre-mi" className="py-24 px-6 relative bg-slate-900 overflow-hidden">
      {/* Detalle Premium: Resplandor sutil de fondo */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-sky-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda: Texto y Descripción */}
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-bold text-sky-400 tracking-widest uppercase mb-3">
            Conóceme
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-6">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Mí</span>
          </h3>
          
          <div className="space-y-5 text-slate-400 text-lg font-light leading-relaxed">
            <p>
              Soy un desarrollador web que disfruta de la programación y la creación de aplicaciones web eficientes y escalables. 
            </p>
            <p>
              Me apasiona resolver problemas complejos, aprender herramientas nuevas constantemente y, sobre todo, compartir mis conocimientos técnicos con otras personas para crecer en comunidad.
            </p>
          </div>
        </div>

        {/* Columna Derecha: Caja de Tecnologías */}
        <TecnologiasMasUsadas />
        
      </div>
    </section>
  );
}

// --- SUB-COMPONENTE: CONTENEDOR DE TECNOLOGÍAS ---
function TecnologiasMasUsadas() {
  return (
    <div className="relative group">
      {/* Borde animado (Efecto Glow) */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Contenedor Principal (Glassmorphism) */}
      <div className="relative p-8 bg-slate-950/80 border border-slate-800/60 backdrop-blur-xl rounded-2xl shadow-2xl">
        <h3 className="text-lg font-semibold text-slate-200 mb-6 flex items-center gap-3">
          <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Stack Principal
        </h3>
        
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {tecnologiasUsadas.map((tecnologia, index) => (
            <Tecnologia 
              key={index} 
              tecnologiaImagen={tecnologia.icono} 
              tecnologiaNombre={tecnologia.nombre} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTE: ITEM DE TECNOLOGÍA ---
function Tecnologia({ tecnologiaImagen, tecnologiaNombre }) {
  return (
    <li className="flex flex-col items-center justify-center gap-3 p-4 bg-slate-900/50 border border-slate-800/80 rounded-xl hover:border-sky-400/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 group/tech">
      <div className="w-10 h-10 flex items-center justify-center">
        {tecnologiaImagen ? (
          <img 
            src={tecnologiaImagen} 
            alt={tecnologiaNombre} 
            // 1. Estado Base: 'brightness-0 invert' lo hace blanco puro, 'opacity-50' lo vuelve un gris claro muy sutil.
            // 2. Estado Hover: Restauramos opacity a 100 y aplicamos el cálculo exacto de filtro para llegar al #38bdf8 (sky-400 de Tailwind)
            className="w-8 h-8 object-contain filter brightness-0 invert opacity-50 group-hover/tech:opacity-100 group-hover/tech:[filter:invert(63%)_sepia(90%)_saturate(2975%)_hue-rotate(174deg)_brightness(102%)_contrast(105%)] transition-all duration-300" 
          />
        ) : (
          <div className="w-8 h-8 bg-slate-700 rounded-full animate-pulse"></div>
        )}
      </div>
      
      {/* --- TEXTO CORREGIDO PARA HOVER --- */}
      <span className="text-xs font-medium text-slate-400 group-hover/tech:text-sky-300 transition-colors text-center">
        {tecnologiaNombre}
      </span>
    </li>
  );
}

export default AboutMe;