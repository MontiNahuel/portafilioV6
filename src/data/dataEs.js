import imagenMunicipio from "../assets/municipio.jpg";
import imagenBandUp from "../assets/bandup.jpg";
import imagenGestionStock from "../assets/gestion-de-stock.jpg";
import imagenEcommerce from "../assets/ecommerceBackEnd.jpeg";
import imagenUADE from "../assets/icons/UADE-log.svg";
import imagenCodoACodo from "../assets/icons/codoacodo.png";
import imagenRedHat from "../assets/icons/redhatV6.png";
import imagenIbm from "../assets/icons/ibm.png";
import logoAsistodo from "../assets/icons/asistodo-logo.png";
import diagramaHealthGrid from "../assets/diagrama-healthgrid-legacy.svg";
import visualizacionFichaMedica from "../assets/visualiazcion-ficha-medica.png";
import visualizacionEpisodios from "../assets/visualizacion-episodios.png";
import imagenBannerHCE from "../assets/banner-proyecto.png";
import imagenBannerCRM from "../assets/crm-banner.png";
import {
    SiReact, SiSpringboot, SiNodedotjs,
    SiFirebase, SiNeo4J, SiMongodb, SiJavascript, SiElectron,
    SiFastapi, SiPostgresql, SiSqlalchemy, SiVuedotjs, SiTypescript,
    SiEclipseide
} from "react-icons/si";
import { FaJava, FaDatabase, FaGithub, FaLinkedin } from "react-icons/fa";

export const proyectosIntroduccionEs = [
    {
        id: 1,
        nombreProyecto: "Aplicación de reclamos/red social para un municipio",
        descripcionProyecto: "Aplicación dedicada a la gestión de reclamos, sugerencias y eventos de un municipio; además de eso cuenta con una red social para conectar a los vecinos entre sí.",
        imagenProyecto: imagenMunicipio,
        estadoProyecto: "Completado"
    },
    {
        id: 2,
        nombreProyecto: "Red social dedicada a músicos",
        descripcionProyecto: "Proyecto de red social dedicada a músicos, donde pueden compartir sus creaciones y conocer a otros músicos.",
        imagenProyecto: imagenBandUp,
        estadoProyecto: "Completado"
    },
    {
        id: 3,
        nombreProyecto: "Aplicación de escritorio para la gestión de un comercio",
        descripcionProyecto: "Aplicación de escritorio dedicada a la gestión de un comercio, donde se pueden gestionar los productos y ventas.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Completado"
    },
    {
        id: 4,
        nombreProyecto: "Backend para un ecommerce",
        descripcionProyecto: "Backend desarrollado para un ecommerce con todas sus funcionalidades básicas, utilizando dos bases de datos.",
        imagenProyecto: imagenEcommerce,
        estadoProyecto: "Completado"
    },
    {
        id: 5,
        nombreProyecto: "Aplicación de administración de un negocio",
        descripcionProyecto: "Aplicación de escritorio desarrollada para la administración de un negocio, permitiendo registrar productos, ventas y clientes.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Completado (Recibiendo actualizaciones)"
    }
];

export const proyectosEs = [
    {
        id: 1,
        nombreProyecto: "Aplicación de reclamos/red social para un municipio",
        descripcionProyecto: `Aplicación dedicada a la gestión de reclamos, sugerencias y eventos de un municipio; además de eso cuenta con un apartado para que los vecinos puedan publicar sus servicios personales, por ejemplo un tal Juan que se dedica a la plomería o el dueño de un restaurante que quiere promocionar su local.
Cada persona cuenta con su propio usuario dentro de la aplicación, que se divide en dos categorías: vecino e inspector; este último solamente tiene la posibilidad de validar o generar los reclamos con los que esté enlazado.`,
        imagenProyecto: imagenMunicipio,
        estadoProyecto: "Completado",
        enlaces: [{ repositorio: "FrontEnd", url: "https://github.com/MontiNahuel/TPO-DA1-Front-End", icono: FaGithub }, { repositorio: "BackEnd", url: "https://github.com/MontiNahuel/TPO-DA1-Back-End", icono: FaGithub }],
        tecnologias: [{ nombre: "React-Native", icono: SiReact }, { nombre: "SpringBoot", icono: SiSpringboot }, { nombre: "Java", icono: FaJava }, { nombre: "Sql-Server", icono: FaDatabase }]
    },
    {
        id: 2,
        nombreProyecto: "Red social dedicada a músicos",
        descripcionProyecto: "Naciendo de una propuesta de idea innovadora, con un grupo de desarrollo se nos ocurrió plantear una solución a una problemática que no está bien cubierta, como puede ser la unión de músicos para formar una banda y/o cantantes con productores, etc.\nLa idea es que los usuarios puedan crear un perfil, subir sus canciones, buscar otros usuarios y contactarlos para formar una banda, o simplemente para colaborar en un proyecto musical.",
        imagenProyecto: imagenBandUp,
        estadoProyecto: "Completado",
        enlaces: [{ repositorio: "FrontEnd y BackEnd", url: "https://github.com/MontiNahuel/BandUpFinalPrevio", icono: FaGithub }],
        tecnologias: [{ nombre: "React-Native", icono: SiReact }, { nombre: "NodeJs", icono: SiNodedotjs }, { nombre: "Firebase", icono: SiFirebase }]
    },
    {
        id: 3,
        nombreProyecto: "Aplicación de escritorio para la gestión de un comercio",
        descripcionProyecto: "Desarrollada para satisfacer las necesidades básicas de control de stock, permitiendo registrar cada producto individualmente, así como sus cantidades, nombre, precio, etc.\nPor otra parte permite registrar las ventas, con la posibilidad de seleccionar los productos que se vendieron y la cantidad de cada uno, generando un ticket con la información de la venta.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Completado",
        enlaces: [{ repositorio: "Aplicación", url: "https://github.com/MontiNahuel/TPO-POO-DesktopApp", icono: FaGithub }],
        tecnologias: [{ nombre: "Java", icono: FaJava }, { nombre: "Swing", icono: SiEclipseide }]
    },
    {
        id: 4,
        nombreProyecto: "Backend para un ecommerce",
        descripcionProyecto: "Desarrollado con la finalidad de crear una API que interactúe con más de una base de datos, y que sean distintas entre sí, implementada inteligentemente para que sea escalable y fácil de mantener.\nActualmente está en desarrollo un FrontEnd que interactúe con esta API ya que su funcionalidad está accesible a través de una consola.\nPermite la creación de un usuario, el cual tiene un carrito propio y permite agregar productos a este, además de poder realizar compras, registrar distintos métodos de pago y poder seleccionar cual se desea usar.\nPor otro lado cuenta con un usuario admin para poder visualizar las ventas, registrar productos, etc.",
        imagenProyecto: imagenEcommerce,
        estadoProyecto: "Completado",
        enlaces: [{ repositorio: "Backend", url: "https://github.com/MontiNahuel/TPO-IDD2-Back-End", icono: FaGithub }],
        tecnologias: [{ nombre: "SpringBoot", icono: SiSpringboot }, { nombre: "Java", icono: FaJava }, { nombre: "Neo4J", icono: SiNeo4J }, { nombre: "MongoDB", icono: SiMongodb }]
    },
    {
        id: 5,
        nombreProyecto: "Aplicación de administración de un negocio",
        descripcionProyecto: "El proyecto más completo hasta la fecha, nace de la necesidad de un cliente con la exigencia de una solución integral y personalizada, partiendo desde la base que se necesitaba desarrollar una solución que funcione completamente en entorno local, pero sin perder la facilidad de una app fácil de usar. Aplicación de escritorio desarrollada para la administración de un negocio, permitiendo registrar productos, ventas y clientes. Cuenta con una interfaz amigable y fácil de usar.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Completado (Recibiendo actualizaciones)",
        tecnologias: [{ nombre: "JavaScript", icono: SiJavascript }, { nombre: "React", icono: SiReact }, { nombre: "Electron", icono: SiElectron }, { nombre: "NeDB", icono: FaDatabase }]
    }
];

export const proyectosDestacadosEs = [
    {
        id: 101,
        nombreProyecto: "HealthGrid HCE (Historia Clínica Electrónica)",
        descripcionProyecto: "Sistema de alto rendimiento para la gestión de Historias Clínicas, desarrollado originalmente como pieza clave de una infraestructura hospitalaria de 10 microservicios (Domain-Driven Design).\nDebido al cese de operaciones de los servicios restantes, este módulo fue refactorizado y aislado exitosamente para operar de forma totalmente autónoma, simulando las integraciones mediante catálogos propios.\nA nivel técnico, implementa un flujo de datos 100% asíncrono en FastAPI y PostgreSQL, resolviendo proactivamente cuellos de botella de concurrencia y el problema 'N+1 Queries' usando Eager Loading.",
        imagenProyecto: imagenBannerHCE,
        estadoProyecto: "Arquitectura Distribuida",
        enlaces: [
            { nombre: "Back-End", url: "https://github.com/MontiNahuel/hce-back-end", icono: FaGithub },
            { nombre: "Front-End", url: "https://github.com/MontiNahuel/hce-front-end", icono: FaGithub }
        ],
        enlaceServicio: { nombre: "Acceder al Sistema en Vivo", url: "https://hce-front-end-brown.vercel.app/" },
        tecnologias: [
            { nombre: "FastAPI", icono: SiFastapi },
            { nombre: "PostgreSQL", icono: SiPostgresql },
            { nombre: "SQLAlchemy", icono: SiSqlalchemy },
            { nombre: "Vue.js", icono: SiVuedotjs },
            { nombre: "TypeScript", icono: SiTypescript }
        ],
        arquitectura: [
            "Implementación de un flujo de datos no bloqueante desde el endpoint HTTP hasta el motor de la base de datos.",
            "Resolución proactiva del problema 'N+1 Queries' en la serialización de datos anidados utilizando estrategias de Eager Loading (selectinload y joinedload en SQLAlchemy).",
            "Diseño Modular (Domain-Driven Design): Separación estricta de dominios de negocio (Core, Turnos, HCE*, Farmacia, Diagnóstico por Imágenes, Laboratorio, Facturación, Portal Paciente, Internación, Dispositivos de Alta Frecuencia).",
            "Módulo aislado que puede operar de forma totalmente autónoma, simulando las integraciones mediante catálogos propios."
        ],
        duracion: "Abril 2026 - Actualidad",
        galeria: [
            { src: diagramaHealthGrid, caption: "Diagrama de Arquitectura de Microservicios (DDD)" },
            { src: visualizacionFichaMedica, caption: "Vista del historial clínico y resumen del paciente" },
            { src: visualizacionEpisodios, caption: "Vista de episodios y tratamientos del paciente" }
        ],
        badge: "En Producción (Recibiendo actualizaciones)"
    },
    {
        id: 102,
        nombreProyecto: "Smart CRM (Gestión & Análisis IA)",
        descripcionProyecto: "Sistema CRM integral diseñado para equipos de trabajo, con soporte en tiempo real y capacidades de inteligencia artificial.\nCuenta con una interfaz SPA veloz construida en Vue 3 y un backend altamente concurrente en FastAPI.\nEl ecosistema destaca por su persistencia dual (políglota), combinando MySQL para la estructura de negocio rígida y MongoDB para gestionar el chat bidireccional mediante WebSockets y los resúmenes automatizados de IA.",
        imagenProyecto: imagenBannerCRM,
        estadoProyecto: "En Producción",
        enlaces: [
            { nombre: "Back-End", url: "https://github.com/MontiNahuel/repo-crm-back-end", icono: FaGithub },
            { nombre: "Front-End", url: "https://github.com/MontiNahuel/repo-crm", icono: FaGithub }
        ],
        enlaceServicio: { nombre: "Acceder al Sistema en Vivo", url: "https://repo-crm.vercel.app/" },
        tecnologias: [
            { nombre: "Vue.js", icono: SiVuedotjs },
            { nombre: "TypeScript", icono: SiTypescript },
            { nombre: "FastAPI", icono: SiFastapi },
            { nombre: "MySQL", icono: FaDatabase },
            { nombre: "MongoDB", icono: SiMongodb }
        ],
        arquitectura: [
            "Arquitectura Monolítica Modular bajo el estricto patrón Controlador-Servicio-Repositorio.",
            "Infraestructura de persistencia dual: MySQL para módulos transaccionales (Usuarios, Inventario) y MongoDB para alta concurrencia (Chat en Vivo y Resúmenes IA).",
            "Gestión de estado escalable (Pinia) e intercepción global de peticiones (Axios) para renovación silenciosa de tokens (Refresh/Access Token).",
            "Canales de comunicación bidireccionales y asíncronos mediante WebSockets (socket.io).",
            "Pipeline de despliegue automatizado distribuido: Vercel para el Frontend (SPA) y Render + Docker para el Backend."
        ],
        duracion: "Febrero 2026 - Actualidad",
        badge: "En Producción"
    }
];

export const estudiosEs = [
    {
        id: 0,
        nombreEstudio: "Tecnicatura Universitaria en Desarrollo de Software",
        lugarEstudio: "Universidad Argentina de la Empresa",
        fechaInicio: "Mar 2023",
        fechaFin: "Nov 2025",
        estado: "Egresado",
        logoInstitucion: imagenUADE,
        verMas: "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/tecnicatura-universitaria-en-desarrollo-de-software/",
        certificado: "https://drive.google.com/file/d/1WpgR1bLltxIMQrvR6Cwr7Bj4PwESMGQT/view?usp=drive_link"
    },
    {
        id: 1,
        nombreEstudio: "Licenciatura en Gestión de Tecnología de la Información",
        lugarEstudio: "Universidad Argentina de la Empresa",
        fechaInicio: "Mar 2025",
        fechaFin: "Jun 2027 (Estimado)",
        estado: "En-curso",
        logoInstitucion: imagenUADE,
        verMas: "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/licenciatura-en-gestion-de-tecnologia-de-la-informacion/"
    },
    {
        id: 2,
        nombreEstudio: "Curso Full Stack Dev Con Orientación en Java/Springboot",
        lugarEstudio: "Codo a Codo 4.0",
        fechaInicio: "Jun 2022",
        fechaFin: "Dic 2022",
        estado: "Completado",
        logoInstitucion: imagenCodoACodo,
        verMas: "https://aulasvirtuales.bue.edu.ar/",
        certificado: "https://drive.google.com/file/d/17zt6PNdnr21K_8IjAzVTBZGOzvnJreCm/view"
    },
    {
        id: 3,
        nombreEstudio: "Curso de Administración de Sistemas Operativos Linux",
        lugarEstudio: "RedHat",
        fechaInicio: "Ago 2024",
        fechaFin: "Dic 2024",
        estado: "Completado",
        logoInstitucion: imagenRedHat,
        verMas: "https://www.redhat.com/en",
        certificado: "https://drive.google.com/file/d/1t7J0OrVKMOp6Dw5-J-TSLNgoyNAkaP1v/view"
    },
    {
        id: 4,
        nombreEstudio: "Curso de Java Avanzado",
        lugarEstudio: "TalentoTech (Gobierno de la Ciudad de Buenos Aires)",
        fechaInicio: "Mar 2026",
        fechaFin: "Jul 2026",
        estado: "Completado",
        verMas: "https://talentotech.buenosaires.gob.ar/",
        certificadoEnTramite: true
    },
    {
        id: 5,
        nombreEstudio: "Curso de Ciberseguridad y Seguridad de la Información",
        lugarEstudio: "IBM",
        fechaInicio: "Ago 2026",
        fechaFin: "Dic 2026 (Estimado)",
        estado: "En-curso",
        logoInstitucion: imagenIbm,
        verMas: "https://skillsbuild.org/"
    }
];

export const experienciaLaboralEs = [
    {
        id: 1,
        puesto: "Software Developer",
        empresa: "ASISTODO Integral - Servicios de Multiasistencia",
        logoEmpresa: logoAsistodo,
        modalidad: "Presencial / Híbrido",
        periodo: "2026 — Presente",
        descripcion: "Desarrollo y evolución de sistemas de gestión interna de alta disponibilidad y productos digitales para el mercado en el sector de servicios y multiasistencia.",
        logros: [
            "Desarrollo de módulos web e interfaces con React y TypeScript conectadas a servicios en FastAPI y Java.",
            "Mantenimiento y migración progresiva de sistemas hacia arquitecturas modernas y escalables.",
            "Diseño y optimización de consultas en bases de datos relacionales y NoSQL (SQL Server, MongoDB)."
        ],
        tecnologias: ["React", "TypeScript", "FastAPI", "SpringBoot", "MongoDB", "SQL Server", "Visual Basic 6"]
    },
    {
        id: 2,
        puesto: "Freelance Developer",
        empresa: "Proyectos Independientes / Autónomo",
        modalidad: "Remoto",
        periodo: "2025 — 2026",
        descripcion: "Desarrollo end-to-end de aplicaciones web y de escritorio a medida para clientes comerciales y logística, abarcando desde la concepción hasta el despliegue.",
        logros: [
            "Desarrollo de aplicación de escritorio en Electron para control de stock, clientes y facturación local en comercios.",
            "Diseño e implementación de plataforma web intranet para empresa de logística, optimizando la gestión interna de procesos."
        ],
        tecnologias: ["Vue.js", "React", "FastAPI", "Python", "Electron", "MySQL", "MongoDB"]
    },
    {
        id: 3,
        puesto: "Profesor Particular & Mentor Técnico",
        empresa: "Freelance / Autónomo",
        periodo: "2023 — 2026",
        descripcion: "Dictado de clases particulares y mentoría personalizada en programación, lógica algorítmica y matemática para estudiantes de nivel secundario y universitario.",
        logros: [
            "Acompañamiento pedagógico en estructuras de datos, programación orientada a objetos (POO) y desarrollo web.",
            "Fomento de habilidades de comunicación técnica y resolución de problemas analíticos complejos."
        ],
        tecnologias: ["Lógica de Programación", "Estructuras de Datos", "Algoritmos", "Matemática"]
    }
];
