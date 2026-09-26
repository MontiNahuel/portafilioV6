import React, { useState } from "react";
import { VscMail } from "react-icons/vsc";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { useToast } from "../context/ToastContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function ContactoIndividual({ tipo, contacto, url }) {
  const isEmail = tipo === "Email";
  const isLinkedIn = tipo === "LinkedIn";
  const { showToast } = useToast();
  const { isV2 } = useTheme();
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const getTargetUrl = () => {
    if (url) return url;
    if (isEmail) return "mailto:montinahuel@gmail.com";
    if (isLinkedIn) return "https://www.linkedin.com/in/nahuel-monti-5ba522241/";
    return "https://wa.me/5491165181087";
  };

  const getBtnLabel = () => {
    if (isEmail) return t("contact.info.emailBtn");
    if (isLinkedIn) return t("contact.info.linkedinBtn");
    return t("contact.info.phoneBtn");
  };

  const renderIcon = () => {
    if (isEmail) return <VscMail size={24} />;
    if (isLinkedIn) return <FaLinkedin size={24} />;
    return <MdOutlinePhoneIphone size={24} />;
  };

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(contacto).then(() => {
      setCopied(true);
      showToast(`${t("toast.copied")} (${tipo})`, "copy");
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      showToast(t("contact.form.error"), "error");
    });
  };

  return (
    <article className={`group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-slate-900/60 border border-slate-800/60 rounded-2xl transition-all duration-300 ${
      isV2 
        ? 'hover:border-indigo-400/50 hover:bg-indigo-950/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]' 
        : 'hover:border-sky-400/30 hover:bg-slate-800/50'
    }`}>
      
      {/* Icono y Datos (Clickables para copiar) */}
      <div 
        onClick={handleCopy}
        className="flex items-center gap-4 cursor-pointer select-none group/info"
        title={t("contact.info.copy")}
      >
        <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 transition-all shrink-0 ${
          isV2 
            ? 'text-indigo-400 group-hover/info:scale-110 group-hover/info:bg-indigo-500/10' 
            : 'text-sky-400 group-hover/info:scale-110 group-hover/info:bg-sky-500/10'
        }`}>
          {renderIcon()}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className={`text-xs font-semibold text-slate-400 uppercase tracking-wider ${isV2 ? 'font-jakarta' : ''}`}>{tipo}</p>
            <span className={`text-[10px] font-mono opacity-0 group-hover/info:opacity-100 transition-opacity ${isV2 ? 'text-indigo-400/90' : 'text-sky-400/80'}`}>
              {t("contact.info.copy")}
            </span>
          </div>
          <p className={`text-base font-medium text-slate-100 transition-colors ${isV2 ? 'font-jakarta group-hover/info:text-indigo-300' : 'group-hover/info:text-sky-300'}`}>
            {contacto}
          </p>
        </div>
      </div>

      {/* Botones de Acción */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Botón Copiar Rápido */}
        <button
          onClick={handleCopy}
          className={`p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 transition-all ${
            isV2 ? 'hover:text-indigo-300 hover:border-indigo-400/50 hover:bg-indigo-950/40' : 'hover:text-sky-400 hover:border-sky-400/50 hover:bg-slate-800'
          }`}
          title={t("contact.info.copy")}
          aria-label={`Copiar ${tipo}`}
        >
          {copied ? (
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          )}
        </button>

        {/* Botón Principal (Mail/WhatsApp/LinkedIn) */}
        <a 
          href={getTargetUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
            isV2
              ? 'bg-slate-900 border border-indigo-400/80 text-white font-jakarta font-medium shadow-[0_0_12px_rgba(99,102,241,0.2)] hover:bg-indigo-500 hover:text-white hover:border-indigo-400'
              : 'bg-slate-800 border border-slate-700 text-slate-300 hover:bg-sky-400 hover:text-slate-950 hover:border-sky-400'
          }`}
        >
          {getBtnLabel()}
        </a>
      </div>
    </article>
  );
}