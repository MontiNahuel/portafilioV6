import { useState, useEffect } from "react";
import { useToast } from "../context/ToastContext";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio"); // Estado para el Scrollspy
  const { showToast } = useToast();

  useEffect(() => {
    // 1. Lógica del fondo del Navbar al hacer scroll
    const handleScroll = () => {
      setScrolling(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    // 2. Lógica del IntersectionObserver para el Scrollspy
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Se activa cuando la sección llega a la mitad de la pantalla
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observar todas las secciones que tengan un ID
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
    showToast("¡Abriendo CV de Nahuel Monti!", "download");
    if (menuOpen) setMenuOpen(false);
  };

  // Agregamos la propiedad 'id' para que coincida con las secciones HTML
  const navLinks = [
    { name: "Inicio", href: "#inicio", id: "inicio" },
    { name: "Proyectos", href: "#proyectos", id: "proyectos" },
    { name: "Sobre Mí", href: "#sobre-mi", id: "sobre-mi" }, 
    { name: "Estudios", href: "#estudios", id: "estudios" },
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
        {/* Logo Area */}
        <a href="#inicio" className="z-[60] relative flex items-center gap-2.5 group">
          <span className="text-sky-400 font-mono font-bold text-2xl group-hover:text-sky-300 transition-colors">
            ~/
          </span>
          <span className="text-slate-100 font-bold text-xl tracking-tighter flex items-center">
            Nahuel <span className="text-slate-400 font-light"> Monti</span>
            {/* Cursor parpadeante */}
            <span className="inline-block w-2.5 h-6 ml-1.5 bg-sky-400 animate-pulse opacity-80"></span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1.5 rounded-full p-1.5 bg-slate-900/50 border border-slate-800/60">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeSection === link.id
                  ? "text-sky-400 bg-slate-800/80 shadow-inner" // Estilo Activo Premium
                  : "text-slate-300 hover:text-white hover:bg-slate-800/40" // Estilo Inactivo
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Botón Descargar CV */}
          <a
            href="https://drive.google.com/file/d/1LbKeph3wkNfbEqQ099qYSTc5WHPoDslh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/60 border border-slate-700/80 text-slate-300 font-semibold text-xs tracking-wide hover:border-sky-400 hover:text-sky-400 hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            CV
          </a>

          {/* Botón Contactar */}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-sky-400 text-slate-950 font-bold text-sm tracking-wide hover:bg-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:scale-105 transition-all duration-300"
          >
            Contactar
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
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-sky-400 transition-colors"
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
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-lg"
              >
                <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar CV
              </a>
              <a 
                href="#contacto" 
                onClick={() => setMenuOpen(false)} 
                className="flex items-center justify-center px-8 py-3.5 rounded-full bg-sky-400 text-slate-950 font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                Contactar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}