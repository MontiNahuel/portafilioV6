import React from "react";
import { datosContacto } from "../data";
import ContactoIndividual from "./ContactoIndividual";
import "../styles/DatosContacto.css";

function DatosContacto() {
    return (
        <section className="datos__contacto">
            <ul className="contacto__lista">
                {datosContacto.map((dato) => (
                    <ContactoIndividual key={dato.tipo} tipo={dato.tipo} contacto={dato.contacto} />
                ))}
            </ul>
        </section>
    );
}

export default DatosContacto;