import React from "react";
import "../styles/ContactoIndividual.css";
import { VscMail } from "react-icons/vsc";
import { MdOutlinePhoneIphone } from "react-icons/md";

function ContactoIndividual({ tipo, contacto }) {
    return (
        <li className="contacto__individual">
            {tipo === "Email" && <VscMail className="contacto__individual__icono" />}
            {tipo === "Telefono" && <MdOutlinePhoneIphone className="contacto__individual__icono" />}
            <span className="contacto__tipo">{tipo}</span>
            <span className="contacto__dato">{contacto}</span>
            {tipo === "Email" ? (
                <a href="mailto:montinahuel@gmail.com" className="contacto__btn contacto__btn-email">Enviar Email</a>
                ) : (
                <a href="https://wa.me/5491165181087" className="contacto__btn contacto__btn-wpp">Enviar Mensaje</a>
                )
            }
        </li>
    );
}

export default ContactoIndividual;