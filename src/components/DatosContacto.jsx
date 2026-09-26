import React from "react";
import { datosContacto } from "../data";
import ContactoIndividual from "./ContactoIndividual";

export default function DatosContacto() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {datosContacto.map((dato) => (
        <ContactoIndividual key={dato.tipo} tipo={dato.tipo} contacto={dato.contacto} url={dato.url} />
      ))}
    </div>
  );
}