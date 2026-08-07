import { useEffect, useState } from "react";
import { useToast } from "../context/ToastContext";

export default function Intro({ backgroundImage }) {
  const [fadeIn, setFadeIn] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    // Añadimos un pequeño retraso para que la animación se aprecie
    // justo después de que carga la página
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadCV = () => {
    showToast("¡Abriendo CV de Nahuel Monti!", "download");
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 1. Imagen de fondo con efecto de leve zoom-out al cargar */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] ease-out"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: fadeIn ? 'scale(1)' : 'scale(1.05)' 
        }}
      />

      {/* 2. Overlay con degradado hacia el color oscuro de la página */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950"></div>

      {/* 3. Contenedor de contenido con animación de subida y fade-in */}
      <div 
        className={`relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ease-out transform ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Nuevo: Badge de "Disponible" */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-300 tracking-wide">Disponible para nuevos desafíos</span>
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight mb-6">
          ¡Hola! Soy <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 drop-shadow-sm">
            Nahuel Monti
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-lg md:text-2xl text-slate-400 mb-10 max-w-2xl font-light leading-relaxed">
          <strong className="font-semibold text-slate-200">Software Engineer</strong> especializado en React, FastAPI y Java.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
          {/* Botón Principal */}
          <a 
            href="#proyectos" 
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-sky-400 text-slate-950 font-bold text-base tracking-wide hover:bg-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:scale-105 transition-all duration-300"
          >
            Ver Proyectos
          </a>

          {/* Botón Secundario (CV) */}
          <a 
            href="https://drive.google.com/file/d/1LbKeph3wkNfbEqQ099qYSTc5WHPoDslh/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={handleDownloadCV}
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-slate-900/50 border border-slate-700 text-slate-300 font-bold text-base tracking-wide hover:border-sky-400 hover:text-sky-400 hover:bg-slate-800/80 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            {/* Ícono de descarga en SVG */}
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}