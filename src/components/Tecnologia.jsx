import React from 'react'
import '../styles/tecnologia.css'

export const Tecnologia = ({tecnologiaImagen, tecnologiaNombre}) => {
  return (
    <section className='tecnologia__individual'>
        <img src={tecnologiaImagen} alt="" className='tecnologia__individual__icono'/>
        <p className='tecnologia__individual__nombre'>{tecnologiaNombre}</p>
    </section>
  )
}
