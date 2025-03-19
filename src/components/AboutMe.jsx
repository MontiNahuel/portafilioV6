import React from "react";
import "../styles/aboutme.css";
import { tecnologiasUsadas } from "../data";
import { Tecnologia } from "./Tecnologia";

function AboutMe() {
    return (
        <section className="aboutMe" id="sobre mi">
            <div className="aboutMe__container">
                <h2 className="aboutMe__title">Sobre mi</h2>
                <p className="aboutMe__description">
                Soy un desarrollador web que disfruta de la programación y la creación de aplicaciones web. Me gusta aprender cosas nuevas y compartir conocimientos con otras personas.
                </p>
                <TecnologiasMasUsadas/>
            </div>
        </section>
    );
}

function TecnologiasMasUsadas() {
    return (
        <div className="aboutMe__tecnologias">
            <h3 className="aboutMe__tecnologias__titulo">Actualmente estas son las tecnologías con las que mejor me desenvuelvo</h3>
            <ul className="aboutMe__tecnologias__lista">
                {tecnologiasUsadas.map((tecnologia, index) => (
                    <Tecnologia key={index} tecnologiaImagen={tecnologia.icono} tecnologiaNombre={tecnologia.nombre} />
                ))}
            </ul>
        </div>
    );
}

export default AboutMe;