import React, { useState, useEffect, startTransition, ViewTransition } from "react";
import { proyectos, proyectosIntroduccion, proyectosDestacados } from "../data";
import { FaGithub } from "react-icons/fa";

// --- COMPONENTE MODAL (VISTA DETALLADA) ---
export default function ProyectoModal({ id, onClose }) {
  // Buscamos el proyecto en los distintos arreglos según su id
  const proyecto = 
    proyectosDestacados.find(p => p.id === id) ||
    proyectos.find(p => p.id === id) || 
    proyectosIntroduccion.find(p => p.id === id);

  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("resumen");
  const [lightboxImage, setLightboxImage] = useState(null); // { src, index }

  // Bloquear el scroll del fondo
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const openLightbox = (imgItem, index) => {
    startTransition(() => {
      setLightboxImage({ 
        src: typeof imgItem === "string" ? imgItem : imgItem.src, 
        caption: typeof imgItem === "string" ? null : imgItem.caption,
        index 
      });
    });
  };

  const closeLightbox = (e) => {
    if (e) e.stopPropagation();
    startTransition(() => {
      setLightboxImage(null);
    });
  };

  const handlePrevImage = (e) => {
    if (e) e.stopPropagation();
    if (lightboxImage && lightboxImage.index > 0) {
      startTransition(() => {
        const prevItem = proyecto.galeria[lightboxImage.index - 1];
        setLightboxImage({ 
          src: typeof prevItem === "string" ? prevItem : prevItem.src, 
          caption: typeof prevItem === "string" ? null : prevItem.caption,
          index: lightboxImage.index - 1 
        });
      });
    }
  };

  const handleNextImage = (e) => {
    if (e) e.stopPropagation();
    if (lightboxImage && lightboxImage.index < proyecto.galeria.length - 1) {
      startTransition(() => {
        const nextItem = proyecto.galeria[lightboxImage.index + 1];
        setLightboxImage({ 
          src: typeof nextItem === "string" ? nextItem : nextItem.src, 
          caption: typeof nextItem === "string" ? null : nextItem.caption,
          index: lightboxImage.index + 1 
        });
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxImage) return;
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, proyecto]);

  if (!proyecto) return null;

  // Definición dinámica de las pestañas
  const availableTabs = [
    { id: "resumen", label: "Visión General" },
    ...(proyecto.arquitectura ? [{ id: "arquitectura", label: "Arquitectura y Retos" }] : []),
    ...(proyecto.galeria?.length > 0 ? [{ id: "galeria", label: "Galería" }] : []),
    { id: "detalles", label: "Stack & Enlaces" }
  ];

  return (
    <div 
      // Elevamos el z-index a 9999 por las dudas, y usamos items-start + pt-20 para bajar el modal respecto a la navbar
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-24 px-4 pb-4 sm:pt-28 sm:px-6 sm:pb-6"
      onClick={handleClose} 
    >
      <style>
        {`
          @keyframes fadeInTab {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .anim-tab-in {
            animation: fadeInTab 0.3s ease-out forwards;
          }
        `}
      </style>

      {/* Overlay desenfocado */}
      <div 
        className={`absolute inset-0 bg-slate-950/80 backdrop-blur-sm ${
          isClosing ? "anim-overlay-out" : "anim-overlay-in"
        }`}
      ></div>
      
      {/* Contenedor del Modal */}
      <div 
        // Cambié el alto a h-[calc(100vh-7rem)] para que respete el margen superior que le dimos (pt-24/28)
        className={`relative w-full max-w-4xl bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl shadow-sky-900/20 flex flex-col h-[calc(100vh-7rem)] sm:h-[calc(100vh-9rem)] overflow-hidden ${
          isClosing ? "anim-modal-out" : "anim-modal-in"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all backdrop-blur-md shadow-lg group/close"
        >
          <svg className="w-5 h-5 group-hover/close:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenido Scrolleable */}
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar flex flex-col">
          
          {/* Imagen Header */}
          <div className="w-full h-48 sm:h-72 relative bg-slate-800 shrink-0">
            <img 
              src={proyecto.imagenProyecto} 
              alt={proyecto.nombreProyecto} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-16">
              {proyecto.duracion && (
                <div className="flex items-center gap-2 text-sky-400 text-sm font-mono mb-2 tracking-wide">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {proyecto.duracion}
                </div>
              )}
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight drop-shadow-lg leading-tight">
                {proyecto.nombreProyecto}
              </h2>
            </div>
          </div>

          {/* Sistema de Pestañas (Navegación) */}
          <div className="flex border-b border-slate-800/80 px-6 sm:px-8 bg-slate-900/50 sticky top-0 z-10 backdrop-blur-md">
            {availableTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-4 text-sm font-medium transition-all border-b-2 -mb-[1px] ${
                  activeTab === tab.id 
                    ? "border-sky-500 text-sky-400" 
                    : "border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenido de la pestaña activa */}
          <div className="p-6 sm:p-8 flex-grow">
            
            {/* Pestaña: Resumen */}
            {activeTab === "resumen" && (
              <div className="flex flex-col h-full anim-tab-in">
                <div className="text-slate-300 space-y-4 leading-relaxed font-light text-base sm:text-lg mb-8">
                  {proyecto.descripcionProyecto.split("\n").map((parrafo, index) => (
                    <p key={index}>{parrafo}</p>
                  ))}
                </div>
                
                {/* Botón Llamativo de Acceso al Servicio */}
                {proyecto.enlaceServicio && (
                  <div className="mt-auto pt-4 border-t border-slate-800/50">
                    <a 
                      href={proyecto.enlaceServicio.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all hover:-translate-y-1 w-full sm:w-max"
                    >
                      <span>{proyecto.enlaceServicio.nombre}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Pestaña: Arquitectura (Condicional) */}
            {activeTab === "arquitectura" && proyecto.arquitectura && (
              <div className="anim-tab-in">
                <ul className="space-y-4">
                  {proyecto.arquitectura.map((item, index) => (
                    <li key={index} className="flex gap-4 text-slate-300 font-light leading-relaxed bg-slate-800/20 p-4 rounded-xl border border-slate-800/50">
                      <span className="text-sky-500 mt-0.5 shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pestaña: Galería (Condicional) */}
            {activeTab === "galeria" && proyecto.galeria && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 anim-tab-in">
                {proyecto.galeria.map((imgItem, index) => {
                  const src = typeof imgItem === "string" ? imgItem : imgItem.src;
                  const caption = typeof imgItem === "string" ? null : imgItem.caption;
                  const isActive = lightboxImage?.index === index;
                  
                  return (
                    <div 
                      key={index}
                      className={`overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800 relative group aspect-[16/9] cursor-zoom-in ${isActive ? "opacity-0" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(imgItem, index);
                      }}
                    >
                      <img 
                        src={src} 
                        alt={caption || `Captura ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-sky-900/20 transition-all pointer-events-none"></div>
                      {caption && (
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white text-sm font-medium truncate">{caption}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pestaña: Stack & Enlaces */}
            {activeTab === "detalles" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 anim-tab-in">
                
                {/* Tecnologías */}
                <div>
                  <h3 className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-4">
                    Stack Tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {proyecto.tecnologias?.map((tecnologia, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2.5 px-3 py-2 bg-slate-800/40 border border-slate-700/80 rounded-lg shadow-inner"
                      >
                        {tecnologia.icono && (
                          <tecnologia.icono className="w-5 h-5 text-slate-100 opacity-90" />
                        )}
                        <span className="text-sm font-medium text-slate-100">{tecnologia.nombre}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enlaces y Repos */}
                <div className="flex flex-col gap-6">
                  
                  {/* Acceso al Servicio */}
                  {proyecto.enlaceServicio && (
                    <div>
                      <h3 className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-3">
                        Acceso al Servicio
                      </h3>
                      <a
                        href={proyecto.enlaceServicio.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/live flex items-center justify-between px-4 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                      >
                        <span className="text-sm font-bold text-emerald-400 group-hover/live:text-emerald-300">
                          {proyecto.enlaceServicio.nombre}
                        </span>
                        <svg className="w-5 h-5 text-emerald-500 group-hover/live:text-emerald-400 group-hover/live:scale-110 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}

                  {/* Repositorios */}
                  <div>
                    <h3 className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-3">
                      Repositorios
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
                              {enlace.nombre || enlace.repositorio}
                            </span>
                            {enlace.icono ? (
                              <enlace.icono className="w-5 h-5 text-slate-400 group-hover/link:text-sky-400 group-hover/link:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all" />
                            ) : (
                              <svg className="w-5 h-5 text-slate-400 group-hover/link:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            )}
                          </a>
                        ))
                      ) : (
                        <div className="flex items-center gap-3 px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-500 italic text-sm">
                          <FaGithub className="w-5 h-5 text-slate-500 opacity-50" />
                          No hay repositorios públicos
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal (View Transitions) */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4 sm:p-8 anim-overlay-in"
          onClick={closeLightbox}
        >
          {/* Botón cerrar lightbox */}
          <button 
            className="absolute top-6 right-6 z-[10010] p-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-rose-500 hover:border-rose-500 transition-all shadow-lg"
            onClick={closeLightbox}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Flecha Anterior */}
          {lightboxImage.index > 0 && (
            <button 
              className="absolute left-4 sm:left-12 z-[10010] p-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all shadow-lg"
              onClick={handlePrevImage}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Flecha Siguiente */}
          {lightboxImage.index < proyecto.galeria.length - 1 && (
            <button 
              className="absolute right-4 sm:right-12 z-[10010] p-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all shadow-lg"
              onClick={handleNextImage}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          
          <div 
            className="relative max-w-7xl w-full flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.caption || "Vista completa"} 
              className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl drop-shadow-[0_0_40px_rgba(14,165,233,0.15)] anim-modal-in"
            />
            
            <div className="absolute -bottom-20 flex flex-col items-center gap-3 w-full">
              {lightboxImage.caption && (
                <div className="text-slate-100 text-base sm:text-lg font-medium tracking-wide bg-slate-900/90 px-6 py-2 rounded-xl border border-slate-800 shadow-xl text-center max-w-3xl">
                  {lightboxImage.caption}
                </div>
              )}
              <div className="text-slate-400 text-xs font-medium tracking-wider flex items-center gap-2 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800/50">
                <svg className="w-4 h-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{proyecto.galeria.length > 1 ? `Imagen ${lightboxImage.index + 1} de ${proyecto.galeria.length}` : 'Vista en Detalle'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
