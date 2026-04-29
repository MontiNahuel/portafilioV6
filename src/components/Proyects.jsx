import Proyect from './Proyect'
import { proyectosIntroduccion } from '../data'

export default function Proyects() {
  return (
    <section id="proyectos" className="py-24 px-6 relative bg-slate-950">
      {/* Detalle Premium: Un brillo muy sutil en el fondo para separar secciones */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-sky-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-sky-400 tracking-widest uppercase mb-3">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Proyectos</span>
          </h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto font-light">
            Una selección de mis desarrollos más recientes, abarcando desde el diseño frontend hasta la arquitectura backend.
          </p>
        </div>

        {/* Grilla de proyectos (CSS Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {proyectosIntroduccion.map((proyecto, index) => (
            <Proyect key={index} {...proyecto} />
          ))}
        </div>

      </div>
    </section>
  )
}