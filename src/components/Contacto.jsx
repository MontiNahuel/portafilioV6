import React from "react";
import "../styles/contacto.css";
import FormContacto from "./FormContacto";
import DatosContacto from "./DatosContacto";

function Contacto() {

  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        <h2 className="contact__title">Contacto</h2>
        <div className="contact__content">
          <p className="contact__description">
            O envíame un mensaje y te responderé lo antes posible.
          </p>
          <FormContacto/>
        </div>
        <DatosContacto/>
      </div>
    </section>
  );
}

export default Contacto;