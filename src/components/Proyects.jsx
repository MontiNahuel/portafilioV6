import Proyect from './Proyect'
import { proyectosIntroduccion, proyectosDestacados } from '../data'

export default function Proyects() {
  return (
    <section id="proyectos" className="py-24 px-6 relative bg-slate-950">
      {/* Detalle Premium: Un brillo muy sutil en el fondo para separar secciones */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-sky-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Proyectos</span>
          </h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto font-light">
            Una selección de mis desarrollos más recientes, abarcando desde el diseño frontend hasta la arquitectura backend.
          </p>
        </div>

        {/* Proyectos Destacados (Profesionales) */}
        <div className="mb-20">
          <h4 className="text-2xl md:text-3xl font-bold text-slate-200 mb-8 border-b border-slate-800/80 pb-4">
            En Producción
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {proyectosDestacados.map((proyecto, index) => (
              <Proyect key={`destacado-${index}`} {...proyecto} esDestacado={true} />
            ))}
          </div>
        </div>

        {/* Proyectos Académicos/Personales */}
        <div>
          <h4 className="text-xl md:text-2xl font-bold text-slate-400 mb-8 border-b border-slate-800/50 pb-4">
            Proyectos Académicos y Personales
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {proyectosIntroduccion.map((proyecto, index) => (
              <Proyect key={`intro-${index}`} {...proyecto} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}