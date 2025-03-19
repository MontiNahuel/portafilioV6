import React from 'react'
import Proyect from './Proyect'
import "../styles/proyects.css"
import { proyectosIntroduccion } from '../data'

export default function Proyects() {
  return (
    <section className='proyects__container' id='proyectos'>
      <h1 className='proyects__title'>Mis Proyectos</h1>
      <div className='proyects'>
        {proyectosIntroduccion.map((proyecto, index) => (
          <Proyect key={index} {...proyecto} />
        ))}
      </div>
    </section>
    
  )
}
