import React, { useState } from "react";
import { VscMail } from "react-icons/vsc";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { useToast } from "../context/ToastContext";

export default function ContactoIndividual({ tipo, contacto }) {
  const isEmail = tipo === "Email";
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(contacto).then(() => {
      setCopied(true);
      showToast(`¡${tipo} copiado al portapapeles!`, "copy");
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      showToast("No se pudo copiar el texto", "error");
    });
  };

  return (
    <article className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-slate-900/60 border border-slate-800/60 rounded-2xl hover:border-sky-400/30 hover:bg-slate-800/50 transition-all duration-300">
      
      {/* Icono y Datos (Clickables para copiar) */}
      <div 
        onClick={handleCopy}
        className="flex items-center gap-4 cursor-pointer select-none group/info"
        title="Hacer clic para copiar"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 text-sky-400 group-hover/info:scale-110 group-hover/info:bg-sky-500/10 transition-all shrink-0">
          {isEmail ? <VscMail size={24} /> : <MdOutlinePhoneIphone size={24} />}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{tipo}</p>
            <span className="text-[10px] text-sky-400/80 font-mono opacity-0 group-hover/info:opacity-100 transition-opacity">
              (Clic para copiar)
            </span>
          </div>
          <p className="text-base font-medium text-slate-100 group-hover/info:text-sky-300 transition-colors">
            {contacto}
          </p>
        </div>
      </div>

      {/* Botones de Acción */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Botón Copiar Rápido */}
        <button
          onClick={handleCopy}
          className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-sky-400 hover:border-sky-400/50 hover:bg-slate-800 transition-all"
          title="Copiar al portapapeles"
          aria-label={`Copiar ${tipo}`}
        >
          {copied ? (
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          )}
        </button>

        {/* Botón Principal (Mail/WhatsApp) */}
        <a 
          href={isEmail ? "mailto:montinahuel@gmail.com" : "https://wa.me/5491165181087"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-sky-400 hover:text-slate-950 hover:border-sky-400 transition-all whitespace-nowrap"
        >
          {isEmail ? "Escribir Email" : "Enviar WhatsApp"}
        </a>
      </div>
    </article>
  );
}