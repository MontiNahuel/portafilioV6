import React from "react";
import "../styles/estudio.css";

function Estudio({nombreEstudio, lugarEstudio, fechaInicio, fechaFin, estado, logoInstitucion, verMas, certificado}) {
    return (
        <section className="estudio">
            <div className="estudio__info">
                <img src={logoInstitucion} alt="" className="estudio__icono__fondo"/>
                <h3 className="estudio__title">{nombreEstudio}</h3>
                <p className="estudio__institution">{lugarEstudio}</p>
                <p className="estudio__date">{fechaInicio} - {fechaFin}</p>
                <div className="estudio__status__vermas">
                    <p className={`estudio__status estudio__status--${estado.toLowerCase()}`}>{estado && estado.toLowerCase() == "en-curso" ? "En Curso" : estado}</p>
                    <a href={verMas} className="estudio__vermas" target="_blank" rel="noopener noreferrer">Ver Mas</a>
                    {certificado ? <a href={certificado} className="estudio__certificado" target="_blank" rel="noopener noreferrer">Certificado</a> : null}
                </div>
            </div>
        </section>
    )
}

export default Estudio;