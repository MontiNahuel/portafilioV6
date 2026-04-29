import React from "react";
import { VscMail } from "react-icons/vsc";
import { MdOutlinePhoneIphone } from "react-icons/md";

export default function ContactoIndividual({ tipo, contacto }) {
  const isEmail = tipo === "Email";

  return (
    <article className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-slate-900/60 border border-slate-800/60 rounded-2xl hover:border-sky-400/30 hover:bg-slate-800/50 transition-all duration-300">
      
      {/* Icono y Datos */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/10 transition-all">
          {isEmail ? <VscMail size={24} /> : <MdOutlinePhoneIphone size={24} />}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{tipo}</p>
          <p className="text-base font-medium text-slate-100">{contacto}</p>
        </div>
      </div>

      {/* Botón de Acción */}
      <a 
        href={isEmail ? "mailto:montinahuel@gmail.com" : "https://wa.me/5491165181087"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-sky-500 hover:text-slate-950 hover:border-sky-500 transition-all whitespace-nowrap"
      >
        {isEmail ? "Escribir Email" : "Enviar WhatsApp"}
      </a>
    </article>
  );
}