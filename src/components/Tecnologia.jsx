// --- SUB-COMPONENTE: ITEM DE TECNOLOGÍA ---
function Tecnologia({ tecnologiaImagen, tecnologiaNombre }) {
  return (
    <li className="flex flex-col items-center justify-center gap-3 p-4 bg-slate-900/50 border border-slate-800/80 rounded-xl hover:border-sky-400/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 group/tech">
      <div className="w-10 h-10 flex items-center justify-center">
        {tecnologiaImagen ? (
          <img 
            src={tecnologiaImagen} 
            alt={tecnologiaNombre} 
            // --- LA MAGIA NUEVA ESTÁ AQUÍ ---
            // 'brightness-0' vuelve el icono negro.
            // 'drop-shadow(color, x, y, blur)' teñimos el icono de celeste.
            // 'opacity-60' base.
            // 'group-hover/tech:opacity-100' brillamos al 100% en hover.
            className="w-8 h-8 object-contain filter brightness-0 drop-shadow-[0_0_1px_rgba(56,189,248,0.8)] opacity-60 group-hover/tech:opacity-100 group-hover/tech:drop-shadow-[0_0_10px_rgba(56,189,248,1)] transition-all duration-300" 
          />
        ) : (
          <div className="w-8 h-8 bg-slate-700 rounded-full animate-pulse"></div>
        )}
      </div>
      
      {/* --- TEXTO CORREGIDO PARA HOVER --- */}
      <span className="text-xs font-medium text-slate-400 group-hover/tech:text-sky-300 transition-colors text-center">
        {tecnologiaNombre}
      </span>
    </li>
  );
}

export default Tecnologia;