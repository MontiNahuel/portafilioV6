import { useState, useEffect } from "react";
import { useToast } from "../context/ToastContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { FlagIcon } from "./icons/Flags";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio"); // Estado para el Scrollspy
  const { showToast } = useToast();
  const { themeVersion, toggleThemeVersion, isV2 } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    // 1. Lógica del fondo del Navbar al hacer scroll
    const handleScroll = () => {
      setScrolling(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    // 2. Lógica del IntersectionObserver para el Scrollspy
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const handleDownloadCV = () => {
    showToast(t("toast.openingCv"), "download");
    if (menuOpen) setMenuOpen(false);
  };

  const handleToggleVersion = () => {
    const nextVer = isV2 ? "1.0 (Original)" : "2.0 (Plus Jakarta & Indigo)";
    toggleThemeVersion();
    showToast(`${t("toast.versionChanged")} ${nextVer}`, "info");
  };

  const handleToggleLanguage = () => {
    toggleLanguage();
    const nextLangName = language === "es" ? "English" : language === "en" ? "Português" : "Español";
    showToast(`Idioma cambiado a ${nextLangName}`, "info");
  };

  const navLinks = [
    { name: t("nav.inicio"), href: "#inicio", id: "inicio" },
    { name: t("nav.experiencia"), href: "#experiencia", id: "experiencia" },
    { name: t("nav.proyectos"), href: "#proyectos", id: "proyectos" },
    { name: t("nav.sobreMi"), href: "#sobre-mi", id: "sobre-mi" }, 
    { name: t("nav.estudios"), href: "#estudios", id: "estudios" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolling
          ? "bg-slate-950/85 backdrop-blur-md shadow-2xl shadow-sky-900/10 py-4 border-b border-slate-800/60"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center antialiased">
        {/* Columna Izquierda: Logo, v1/v2, Idioma */}
        <div className="flex-1 flex items-center justify-start gap-1.5 sm:gap-2 z-[60] relative">
          <a href="#inicio" className="flex items-center gap-2 group shrink-0">
            <span className={`${isV2 ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-sky-400 group-hover:text-sky-300'} font-mono font-bold text-2xl transition-colors`}>
              ~/
            </span>
            <span className={`text-slate-100 font-bold text-xl tracking-tighter flex items-center whitespace-nowrap ${isV2 ? 'font-jakarta' : ''}`}>
              Nahuel <span className="text-slate-400 font-light ml-1"> Monti</span>
              {/* Cursor parpadeante */}
              <span className={`inline-block w-2.5 h-6 ml-1.5 ${isV2 ? 'bg-indigo-400' : 'bg-sky-400'} animate-pulse opacity-80`}></span>
            </span>
          </a>

          {/* Botón Conmutador de Versión v1 / v2 */}
          <button 
            onClick={handleToggleVersion}
            title={t("nav.toggleVersion")}
            className={`ml-2 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold transition-all duration-300 border flex items-center gap-1.5 cursor-pointer shrink-0 ${
              isV2 
                ? "bg-indigo-950/90 border-indigo-400/80 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.3)] hover:border-indigo-300" 
                : "bg-sky-950/90 border-sky-500/60 text-sky-400 hover:border-sky-300"
            }`}
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>{isV2 ? "v2.0" : "v1.0"}</span>
          </button>

          {/* Botón Conmutador de Idioma (ES / EN / PT) con banderas SVG */}
          <button 
            onClick={handleToggleLanguage}
            title={t("nav.toggleLang")}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold transition-all duration-300 border flex items-center gap-1.5 cursor-pointer shrink-0 ${
              isV2 
                ? "bg-indigo-950/90 border-indigo-400/80 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.3)] hover:border-indigo-300" 
                : "bg-sky-950/90 border-sky-500/60 text-sky-400 hover:border-sky-300"
            }`}
          >
            <FlagIcon lang={language} className="w-4 h-3 rounded-[2px] overflow-hidden shrink-0 shadow border border-slate-700/60" />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>

        {/* Columna Central: Navegación fija en el centro geométrico */}
        <div className="hidden md:flex flex-1 items-center justify-center shrink-0">
          <div className="flex items-center gap-1 rounded-full p-1.5 bg-slate-900/50 border border-slate-800/60 shadow-lg backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${isV2 ? 'font-jakarta' : ''} ${
                  activeSection === link.id
                    ? isV2 ? "text-indigo-300 bg-slate-800/90 shadow-inner border border-indigo-500/30" : "text-sky-400 bg-slate-800/80 shadow-inner"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Botones de Acción */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-3 z-[60]">
          {/* Botón Descargar CV */}
          <a
            href="https://drive.google.com/file/d/1LbKeph3wkNfbEqQ099qYSTc5WHPoDslh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadCV}
            className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/60 border border-slate-700/80 text-slate-300 font-semibold text-xs tracking-wide transition-all duration-300 backdrop-blur-sm whitespace-nowrap ${
              isV2 
                ? 'font-jakarta hover:border-indigo-400/90 hover:text-indigo-300 hover:bg-indigo-950/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
                : 'hover:border-sky-400 hover:text-sky-400 hover:bg-slate-800/80'
            }`}
          >
            <svg className={`w-4 h-4 transition-colors ${isV2 ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-sky-400 group-hover:text-sky-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t("nav.cv")}
          </a>

          {/* Botón Contactar */}
          <a
            href="#contacto"
            className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-slate-900 border whitespace-nowrap ${isV2 ? 'border-indigo-400/80 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:bg-indigo-500/20 hover:border-indigo-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] font-jakarta' : 'border-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.25)] hover:bg-sky-500/20 hover:border-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]'} font-bold text-xs tracking-wide transition-all duration-300`}
          >
            {t("nav.contactar")}
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden z-[60] relative w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute block w-6 h-0.5 bg-slate-100 rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "rotate-45 top-2.5" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 bg-slate-100 rounded-full transition-all duration-300 ease-in-out top-2 rounded ${
                menuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-0.5 bg-slate-100 rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 top-2.5" : "top-4"
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 min-h-screen bg-slate-950 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
            menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          } md:hidden`}
        >
          <ul className="flex flex-col items-center gap-6 text-2xl font-light text-slate-100 tracking-tight">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors ${isV2 ? 'hover:text-indigo-300 font-jakarta' : 'hover:text-sky-400'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mt-4 flex flex-col gap-4 w-full px-12">
              <a
                href="https://drive.google.com/file/d/1LbKeph3wkNfbEqQ099qYSTc5WHPoDslh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadCV}
                className={`group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 border border-slate-700/80 text-slate-200 font-semibold text-lg transition-all duration-300 ${
                  isV2 
                    ? 'font-jakarta hover:border-indigo-400/90 hover:text-indigo-300 hover:bg-indigo-950/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]' 
                    : 'hover:border-sky-400 hover:text-sky-400 hover:bg-slate-800/80'
                }`}
              >
                <svg className={`w-5 h-5 transition-colors ${isV2 ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-sky-400 group-hover:text-sky-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t("nav.descargarCv")}
              </a>
              <a 
                href="#contacto" 
                onClick={() => setMenuOpen(false)} 
                className={`flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300 ${
                  isV2
                    ? 'bg-slate-900 border border-indigo-400/80 text-white font-jakarta shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:bg-indigo-500/20 hover:border-indigo-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]'
                    : 'bg-sky-400 text-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-sky-300'
                }`}
              >
                {t("nav.contactar")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}