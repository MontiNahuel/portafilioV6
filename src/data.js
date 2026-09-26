import { proyectosIntroduccionEs, proyectosEs, proyectosDestacadosEs, estudiosEs, experienciaLaboralEs } from "./data/dataEs";
import { proyectosIntroduccionEn, proyectosEn, proyectosDestacadosEn, estudiosEn, experienciaLaboralEn } from "./data/dataEn";
import { proyectosIntroduccionPt, proyectosPt, proyectosDestacadosPt, estudiosPt, experienciaLaboralPt } from "./data/dataPt";

import { SiReact, SiVuedotjs, SiTypescript, SiSpringboot, SiFastapi, SiMongodb, SiFirebase } from "react-icons/si";
import { FaJava, FaDatabase, FaGithub, FaLinkedin } from "react-icons/fa";

export const tecnologiasUsadas = [
    { nombre: "React", icono: SiReact },
    { nombre: "Vue.js", icono: SiVuedotjs },
    { nombre: "TypeScript", icono: SiTypescript },
    { nombre: "Java", icono: FaJava },
    { nombre: "Spring Boot", icono: SiSpringboot },
    { nombre: "FastAPI", icono: SiFastapi },
    { nombre: "SQL Server", icono: FaDatabase },
    { nombre: "MongoDB", icono: SiMongodb },
    { nombre: "Firebase", icono: SiFirebase },
];

export const datosContacto = [
    {
        tipo: "Email",
        contacto: "montinahuel@gmail.com",
        url: "mailto:montinahuel@gmail.com"
    },
    {
        tipo: "Telefono",
        contacto: "+54 9 11 6518-1087",
        url: "https://wa.me/5491165181087"
    },
    {
        tipo: "LinkedIn",
        contacto: "Nahuel Monti",
        url: "https://www.linkedin.com/in/nahuel-monti-5ba522241/"
    }
];

export const hipervFooter = [
    [
        "Inicio",
        "Experiencia",
        "Proyectos",
        "Sobre Mi",
        "Estudios",
        "Contacto"
    ],
    [
        { url: "https://www.linkedin.com/in/nahuel-monti-5ba522241/", icono: FaLinkedin },
        { url: "https://github.com/MontiNahuel", icono: FaGithub },
    ]
];

export function getDataForLanguage(lang = "es") {
    switch (lang) {
        case "en":
            return {
                proyectosIntroduccion: proyectosIntroduccionEn,
                proyectos: proyectosEn,
                proyectosDestacados: proyectosDestacadosEn,
                estudios: estudiosEn,
                experienciaLaboral: experienciaLaboralEn,
            };
        case "pt":
            return {
                proyectosIntroduccion: proyectosIntroduccionPt,
                proyectos: proyectosPt,
                proyectosDestacados: proyectosDestacadosPt,
                estudios: estudiosPt,
                experienciaLaboral: experienciaLaboralPt,
            };
        case "es":
        default:
            return {
                proyectosIntroduccion: proyectosIntroduccionEs,
                proyectos: proyectosEs,
                proyectosDestacados: proyectosDestacadosEs,
                estudios: estudiosEs,
                experienciaLaboral: experienciaLaboralEs,
            };
    }
}

// Backwards compatibility default exports (Spanish)
export const proyectosIntroduccion = proyectosIntroduccionEs;
export const proyectos = proyectosEs;
export const proyectosDestacados = proyectosDestacadosEs;
export const estudios = estudiosEs;
export const experienciaLaboral = experienciaLaboralEs;
