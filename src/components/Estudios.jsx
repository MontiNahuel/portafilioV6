import React from "react";
import { estudios } from "../data";
import Estudio from "./Estudio";

// --- COMPONENTE CONTENEDOR (Estudios.jsx) ---
export default function Estudios() {
  return (
    <section id="estudios" className="py-24 px-6 relative bg-slate-950">
      {/* Detalle Premium: Línea divisoria superior sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-sky-400 tracking-widest uppercase mb-3">
            Formación
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Estudios</span>
          </h3>
        </div>

        {/* Grilla de Estudios (Estilo Tarjetas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {estudios.map((estudio, index) => (
            <Estudio key={estudio.id || index} {...estudio} />
          ))}
        </div>

      </div>
    </section>
  );
}