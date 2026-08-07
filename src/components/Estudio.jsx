import { useToast } from "../context/ToastContext";

// --- COMPONENTE TARJETA (Estudio.jsx) ---
function Estudio({
  nombreEstudio,
  lugarEstudio,
  fechaInicio,
  fechaFin,
  estado,
  logoInstitucion,
  verMas,
  certificado,
  certificadoEnTramite
}) {
  const { showToast } = useToast();

  const status = estado ? estado.toLowerCase() : "";
  const isEnCurso = status.includes("curso");

  const statusBadge = isEnCurso
    ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
    : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <article 
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 md:p-8 overflow-hidden hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-300"
    >
      
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: "radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(56,189,248,0.1), transparent 40%)"
        }}
      />

      {/* SELLO AL COSTADO CORREGIDO Y GARANTIZADO */}
      <div className="absolute right-4 -bottom-1 w-32 h-32 opacity-[0.06] pointer-events-none group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-500">
        {logoInstitucion ? (
          <img
            src={logoInstitucion}
            alt="Sello Institución"
            // brightness-0 invert fuerza a que el logo sea 100% blanco puro
            className="w-full h-full object-contain filter brightness-0 invert"
          />
        ) : (
          // Ícono de respaldo: Aparece si te olvidaste de poner un logo en data.js
          <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        )}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col h-full drop-shadow-md">

        {/* Fila superior: Estado y Fechas */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-4 border-b border-slate-700/60 pb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border shadow-sm ${statusBadge}`}>
            {isEnCurso && <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>}
            {isEnCurso ? "En Curso" : estado}
          </span>

          <span className="text-sm font-medium text-slate-400 tracking-wide bg-slate-950/50 px-2 py-1 rounded-md">
            {fechaInicio} — {fechaFin}
          </span>
        </div>

        {/* Título e Institución */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-100 leading-tight mb-2 group-hover:text-sky-400 transition-colors">
          {nombreEstudio}
        </h3>
        <p className="text-base font-medium text-slate-300 flex items-center gap-2 mb-6">
          <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {lugarEstudio}
        </p>

        {/* Botones de acción */}
        <div className="mt-auto flex flex-wrap gap-3">
          {certificado && (
            <a
              href={certificado}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => showToast(`¡Abriendo certificado de ${lugarEstudio}!`, "download")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/20 border border-sky-500/30 text-sky-300 text-sm font-medium hover:bg-sky-500 hover:text-slate-950 hover:border-sky-500 transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certificado
            </a>
          )}

          {certificadoEnTramite && !certificado && (
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/90 text-sm font-medium cursor-default shadow-sm"
              title="El certificado de finalización está siendo procesado por la institución"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Certificado en Trámite
            </div>
          )}

          {verMas && (
            <a
              href={verMas}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver programa
            </a>
          )}
        </div>

      </div>
    </article>
  );
}

export default Estudio;