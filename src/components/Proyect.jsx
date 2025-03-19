import React, {useState} from "react";
import "../styles/proyect.css";
import "../styles/proyectomodal.css"
import {proyectos} from "../data";

function Proyect({id, nombreProyecto, descripcionProyecto, imagenProyecto, estadoProyecto }) {

  const [verMas, setVerMas] = useState(false);

  const handleClick = () => {
    console.log('Ver más');
    setVerMas(!verMas);
  }

  return (
    <section className="proyect">
      <div className="proyect__container">
        {imagenProyecto && (
          <img className="proyect__image" src={imagenProyecto} alt={`Imagen del proyecto ${nombreProyecto}`} />
        )}
        <div className="proyect__info">
          <h2 className="proyect__title">{nombreProyecto}</h2>
          <p className="proyect__description">{descripcionProyecto}</p>
          <div className="final">
            <p className={`proyect__status proyect__status--${estadoProyecto.toLowerCase()}`}>
              {estadoProyecto}
            </p>
            <button className="proyect__ver__mas" onClick={handleClick}>Ver Mas</button>
          </div>
        </div>
      </div>
      {verMas && <ProyectoModal id={id} onClose={handleClick}/>}
    </section>
  );
}

function ProyectoModal ({id, onClose}) {

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{proyectos[id].nombreProyecto}</h2>
        <img src={proyectos[id].imagenProyecto} alt={proyectos[id].nombreProyecto} className="modal-image" />
        {proyectos[id].descripcionProyecto.split("\n").map((parrafo, index) => (
          <p key={index} className="modal__descripcion">{parrafo}</p>
        ))}
        <h3 className="modal__enlaces__titulo">Enlaces:</h3>
        <ul className="modal__enlaces">
          {proyectos[id].enlaces.map((enlace, index) => (
            <li key={index} className="modal__enlace">
              <a
                href={enlace.url}
                target="_blank"
                rel="noreferrer"
                className="modal__enlace__boton"
              >
                {enlace.repositorio}
                <img className="modal__enlaces__icono" src={enlace.icono} alt="" />
              </a>
            </li>
          ))}
        </ul>
        <h3 className="modal__tecnologias__titulo">Tecnologías utilizadas:</h3>
        <ul className="modal__tecnologias">
          {proyectos[id].tecnologias.map((tecnologia, index) => (
            <div key={index} className={`modal__tecnologia-container modal__tecnologia-${tecnologia.nombre.toLocaleLowerCase()}`}>
              <img src={tecnologia.icono} alt="" className="modal__icono"/>
              <li className={"modal__tecnologia"}>{tecnologia.nombre}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Proyect;
