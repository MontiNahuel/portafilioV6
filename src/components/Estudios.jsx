import React from "react";
import Estudio from "./Estudio";
import "../styles/estudios.css";
import { estudios } from "../data";

function Estudios() {
    return (
        <section className="estudios" id="estudios">
            <h1 className="estudios__titulo">Estudios</h1>
            <div className="estudios__container">
                {estudios.map((estudio) => (
                    <Estudio key={estudio.id} {...estudio} />
                ))}
            </div>            
        </section>
    )
}

export default Estudios;