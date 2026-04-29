import React, { useState, useEffect } from "react";
import { proyectos } from "../data";
import imagenGithub from "../assets/icons/github.svg";

// --- COMPONENTE PRINCIPAL (TARJETA) ---
function Proyect({ id, nombreProyecto, descripcionProyecto, imagenProyecto, estadoProyecto }) {
  const [verMas, setVerMas] = useState(false);

  // Función para darle color dinámico al badge de estado
  const getStatusColor = (status) => {
    const s = status.toLowerCase();
    if (s.includes("terminado") || s.includes("finalizado")) return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    if (s.includes("progreso") || s.includes("desarrollo")) return "bg-sky-500/10 text-sky-400 border-sky-500/20";
    return "bg-slate-500/10 text-slate-400 border-slate-500/20"; // Default
  };

  return (
    <>
      {/* Agregué 'group' aquí para controlar los hovers internos */}
      <article className="group relative flex flex-col bg-slate-900/40 border border-slate-800/60 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500">
        
        {/* Imagen con efecto Zoom on Hover */}
        <div className="relative aspect-video overflow-hidden bg-slate-800 shrink-0">
          {imagenProyecto ? (
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={imagenProyecto} 
              alt={`Imagen del proyecto ${nombreProyecto}`} 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-600">Sin imagen</div>
          )}
          {/* Sombra interna */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
        </div>

        {/* Contenido de la Card */}
        <div className="flex flex-col flex-grow p-6 relative z-10">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors leading-tight">
              {nombreProyecto}
            </h2>
          </div>
          
          <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow font-light">
            {descripcionProyecto}
          </p>
          
          {/* Footer de la Card */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/60">
            <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(estadoProyecto)}`}>
              {estadoProyecto}
            </span>
            <button 
              onClick={() => setVerMas(true)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors group/btn"
            >
              Ver más
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </article>

      {/* Renderizado condicional del Modal */}
      {verMas && <ProyectoModal id={id} onClose={() => setVerMas(false)} />}
    </>
  );
}

// --- COMPONENTE MODAL (VISTA DETALLADA) ---
function ProyectoModal({ id, onClose }) {
const proyecto = proyectos[id];
  const [isClosing, setIsClosing] = useState(false); // Estado para la animación de salida

  // Bloquear el scroll del fondo
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  // La magia: Interceptamos el cierre para animarlo primero
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Esperamos 300ms a que termine la animación en CSS antes de desmontar
  };

  if (!proyecto) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={handleClose} 
    >
      {/* Overlay desenfocado usando clases CSS puras */}
      <div 
        className={`absolute inset-0 bg-slate-950/80 backdrop-blur-sm ${
          isClosing ? "anim-overlay-out" : "anim-overlay-in"
        }`}
      ></div>
      
      {/* Contenedor del Modal usando clases CSS puras */}
      <div 
        className={`relative w-full max-w-4xl bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl shadow-sky-900/20 flex flex-col max-h-[90vh] sm:max-h-[85vh] overflow-hidden ${
          isClosing ? "anim-modal-out" : "anim-modal-in"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button 
          onClick={handleClose} // Usamos handleClose aquí también
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all backdrop-blur-md shadow-lg group/close"
        >
          <svg className="w-5 h-5 group-hover/close:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenido Scrolleable */}
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar">
          
          {/* Imagen Header */}
          <div className="w-full h-48 sm:h-72 relative bg-slate-800 shrink-0">
            <img 
              src={proyecto.imagenProyecto} 
              alt={proyecto.nombreProyecto} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            <h2 className="absolute bottom-6 left-6 right-16 text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight drop-shadow-lg leading-tight">
              {proyecto.nombreProyecto}
            </h2>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Descripción */}
            <div className="text-slate-300 space-y-4 leading-relaxed font-light text-base sm:text-lg">
              {proyecto.descripcionProyecto.split("\n").map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
              ))}
            </div>

            {/* Grilla: Tecnologías y Enlaces */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-800/60 pb-4">
              
              {/* Tecnologías */}
              <div>
                <h3 className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-4">
                  Stack Tecnológico
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {proyecto.tecnologias.map((tecnologia, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2.5 px-3 py-2 bg-slate-800/40 border border-slate-700/80 rounded-lg shadow-inner"
                    >
                      {tecnologia.icono && (
                        <img 
                          src={tecnologia.icono} 
                          alt={tecnologia.nombre} 
                          // --- LA MAGIA ESTÁ AQUÍ ---
                          // 'invert' vuelve lo negro blanco.
                          // 'brightness-0 invert' asegura que CUALQUIER color se vuelva blanco puro.
                          className="w-5 h-5 object-contain filter brightness-0 invert opacity-90" 
                        />
                      )}
                      <span className="text-sm font-medium text-slate-100">{tecnologia.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enlaces */}
              <div>
                <h3 className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-4">
                  Enlaces
                </h3>
                <div className="flex flex-col gap-3">
                  {proyecto.enlaces && proyecto.enlaces.length > 0 ? (
                    proyecto.enlaces.map((enlace, index) => (
                      <a
                        key={index}
                        href={enlace.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link flex items-center justify-between px-4 py-3 bg-slate-800/40 border border-slate-700/80 rounded-lg hover:border-sky-400 hover:bg-slate-800/60 transition-all shadow-inner"
                      >
                        <span className="text-sm font-medium text-slate-100 group-hover/link:text-sky-400 transition-colors">
                          {enlace.repositorio}
                        </span>
                        {enlace.icono ? (
                          <img 
                            // --- LA MAGIA ESTÁ AQUÍ TAMBIÉN ---
                            className="w-5 h-5 object-contain filter brightness-0 invert opacity-70 group-hover/link:opacity-100 group-hover/link:brightness-100 group-hover/link:invert-0 group-hover/link:drop-shadow-[0_0_5px_rgba(56,189,248,0.8)] transition-all" 
                            src={enlace.icono} 
                            alt="Icono" 
                          />
                        ) : (
                          <img 
                            // --- Y AQUÍ ---
                            className="w-5 h-5 object-contain filter brightness-0 invert opacity-70 group-hover/link:opacity-100 transition-all" 
                            src={imagenGithub} 
                            alt="Github" 
                          />
                        )}
                      </a>
                    ))
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-500 italic text-sm">
                      <img className="w-5 h-5 object-contain filter brightness-0 invert opacity-30" src={imagenGithub} alt="Github" />
                      No hay enlaces públicos
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyect;