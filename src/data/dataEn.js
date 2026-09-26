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
import { FaJava, FaDatabase, FaGithub } from "react-icons/fa";

export const proyectosIntroduccionEn = [
    {
        id: 1,
        nombreProyecto: "Municipality Claims & Social Network Platform",
        descripcionProyecto: "Application dedicated to managing citizen claims, suggestions, and municipal events; also features a local social network to connect neighbors.",
        imagenProyecto: imagenMunicipio,
        estadoProyecto: "Completed"
    },
    {
        id: 2,
        nombreProyecto: "Social Network for Musicians & Creators",
        descripcionProyecto: "Social platform for musicians to share songs, find bandmates, and collaborate on musical projects.",
        imagenProyecto: imagenBandUp,
        estadoProyecto: "Completed"
    },
    {
        id: 3,
        nombreProyecto: "Desktop Management & Stock App for Retail",
        descripcionProyecto: "Desktop software dedicated to retail management, handling product inventory, sales tracking, and receipt generation.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Completed"
    },
    {
        id: 4,
        nombreProyecto: "Multi-Database E-Commerce Backend API",
        descripcionProyecto: "Backend API developed for e-commerce with cart, checkout, payment gateways, and admin roles using dual database integration.",
        imagenProyecto: imagenEcommerce,
        estadoProyecto: "Completed"
    },
    {
        id: 5,
        nombreProyecto: "Business ERP & Administration Application",
        descripcionProyecto: "Desktop administration application developed for local business management, inventory control, billing, and customer tracking.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Completed (Receiving updates)"
    }
];

export const proyectosEn = [
    {
        id: 1,
        nombreProyecto: "Municipality Claims & Social Network Platform",
        descripcionProyecto: `Application dedicated to managing citizen claims, suggestions, and municipal events. It also features a marketplace section where neighbors can offer local personal services (such as plumbing, electrical work, or local gastronomy).
Each user profile falls into two categories: Neighbor or Inspector. Inspectors have exclusive validation rights to review or generate assigned claim tickets.`,
        imagenProyecto: imagenMunicipio,
        estadoProyecto: "Completed",
        enlaces: [{ repositorio: "FrontEnd", url: "https://github.com/MontiNahuel/TPO-DA1-Front-End", icono: FaGithub }, { repositorio: "BackEnd", url: "https://github.com/MontiNahuel/TPO-DA1-Back-End", icono: FaGithub }],
        tecnologias: [{ nombre: "React-Native", icono: SiReact }, { nombre: "SpringBoot", icono: SiSpringboot }, { nombre: "Java", icono: FaJava }, { nombre: "SQL Server", icono: FaDatabase }]
    },
    {
        id: 2,
        nombreProyecto: "Social Network for Musicians & Creators",
        descripcionProyecto: "Conceived to solve a common challenge in the music industry: connecting artists, singers, and producers to form bands or collaborate.\nUsers can set up custom profiles, upload original tracks, discover nearby artists, and message collaborators directly.",
        imagenProyecto: imagenBandUp,
        estadoProyecto: "Completed",
        enlaces: [{ repositorio: "FrontEnd & BackEnd", url: "https://github.com/MontiNahuel/BandUpFinalPrevio", icono: FaGithub }],
        tecnologias: [{ nombre: "React-Native", icono: SiReact }, { nombre: "Node.js", icono: SiNodedotjs }, { nombre: "Firebase", icono: SiFirebase }]
    },
    {
        id: 3,
        nombreProyecto: "Desktop Management & Stock App for Retail",
        descripcionProyecto: "Built to fulfill inventory management needs, allowing staff to register products, quantities, prices, and categories.\nIt streamlines sales registration, cart selection, and automatic receipt generation.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Completed",
        enlaces: [{ repositorio: "Application", url: "https://github.com/MontiNahuel/TPO-POO-DesktopApp", icono: FaGithub }],
        tecnologias: [{ nombre: "Java", icono: FaJava }, { nombre: "Swing", icono: SiEclipseide }]
    },
    {
        id: 4,
        nombreProyecto: "Multi-Database E-Commerce Backend API",
        descripcionProyecto: "REST API designed to seamlessly interact with multiple heterogeneous databases (relational & NoSQL) for high scalability.\nIncludes full user authentication, shopping cart management, payment method selection, and admin dashboards for sales reporting.",
        imagenProyecto: imagenEcommerce,
        estadoProyecto: "Completed",
        enlaces: [{ repositorio: "Backend", url: "https://github.com/MontiNahuel/TPO-IDD2-Back-End", icono: FaGithub }],
        tecnologias: [{ nombre: "SpringBoot", icono: SiSpringboot }, { nombre: "Java", icono: FaJava }, { nombre: "Neo4J", icono: SiNeo4J }, { nombre: "MongoDB", icono: SiMongodb }]
    },
    {
        id: 5,
        nombreProyecto: "Business ERP & Administration Application",
        descripcionProyecto: "An end-to-end desktop software solution engineered for offline-first local deployment with an intuitive user experience. Allows retail store managers to oversee inventory, billing, sales analytics, and customer databases.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Completed (Receiving updates)",
        tecnologias: [{ nombre: "JavaScript", icono: SiJavascript }, { nombre: "React", icono: SiReact }, { nombre: "Electron", icono: SiElectron }, { nombre: "NeDB", icono: FaDatabase }]
    }
];

export const proyectosDestacadosEn = [
    {
        id: 101,
        nombreProyecto: "HealthGrid EHR (Electronic Health Records)",
        descripcionProyecto: "High-performance Electronic Health Records (EHR) management system, originally designed as a key core module for a 10-microservice hospital architecture (Domain-Driven Design).\nRefactored and isolated to operate completely autonomously with mock catalog fallback integrations.\nTechnically powered by a 100% non-blocking async pipeline in FastAPI and PostgreSQL, proactively resolving concurrency bottlenecks and the 'N+1 Queries' issue via Eager Loading strategies.",
        imagenProyecto: imagenBannerHCE,
        estadoProyecto: "Distributed Architecture",
        enlaces: [
            { nombre: "Back-End", url: "https://github.com/MontiNahuel/hce-back-end", icono: FaGithub },
            { nombre: "Front-End", url: "https://github.com/MontiNahuel/hce-front-end", icono: FaGithub }
        ],
        enlaceServicio: { nombre: "Access Live System", url: "https://hce-front-end-brown.vercel.app/" },
        tecnologias: [
            { nombre: "FastAPI", icono: SiFastapi },
            { nombre: "PostgreSQL", icono: SiPostgresql },
            { nombre: "SQLAlchemy", icono: SiSqlalchemy },
            { nombre: "Vue.js", icono: SiVuedotjs },
            { nombre: "TypeScript", icono: SiTypescript }
        ],
        arquitectura: [
            "Non-blocking async data pipeline from HTTP endpoint down to database engine.",
            "Proactive resolution of the 'N+1 Queries' problem in nested serialization using Eager Loading strategies (selectinload & joinedload in SQLAlchemy).",
            "Domain-Driven Design (DDD): Strict separation of business subdomains (Core, Appointments, EHR*, Pharmacy, Imaging, Lab, Billing, Patient Portal, Inpatient).",
            "Isolated micro-core capable of autonomous execution using built-in catalog fallbacks."
        ],
        duracion: "April 2026 - Present",
        galeria: [
            { src: diagramaHealthGrid, caption: "Microservices Architecture Diagram (DDD)" },
            { src: visualizacionFichaMedica, caption: "Medical Record & Patient Summary View" },
            { src: visualizacionEpisodios, caption: "Patient Episodes & Treatment Timeline View" }
        ],
        badge: "In Production (Active updates)"
    },
    {
        id: 102,
        nombreProyecto: "Smart CRM (AI Analysis & Team Management)",
        descripcionProyecto: "Comprehensive CRM system engineered for collaborative teams with real-time communication and AI-driven summary insights.\nFeatures a fast Vue 3 SPA interface coupled with a high-concurrency FastAPI backend.\nHighlights dual polyglot persistence: MySQL for transactional business data and MongoDB for WebSockets real-time chat logs and AI analytical summaries.",
        imagenProyecto: imagenBannerCRM,
        estadoProyecto: "In Production",
        enlaces: [
            { nombre: "Back-End", url: "https://github.com/MontiNahuel/repo-crm-back-end", icono: FaGithub },
            { nombre: "Front-End", url: "https://github.com/MontiNahuel/repo-crm", icono: FaGithub }
        ],
        enlaceServicio: { nombre: "Access Live System", url: "https://repo-crm.vercel.app/" },
        tecnologias: [
            { nombre: "Vue.js", icono: SiVuedotjs },
            { nombre: "TypeScript", icono: SiTypescript },
            { nombre: "FastAPI", icono: SiFastapi },
            { nombre: "MySQL", icono: FaDatabase },
            { nombre: "MongoDB", icono: SiMongodb }
        ],
        arquitectura: [
            "Modular Monolith Architecture following strict Controller-Service-Repository pattern.",
            "Polyglot Persistence: MySQL for relational transactional domains (Users, Inventory) and MongoDB for high concurrency (Live Chat & AI Summaries).",
            "Scalable state management (Pinia) & global Axios interceptors for silent token refresh mechanisms.",
            "Bidirectional real-time communication channels via WebSockets (socket.io).",
            "Automated multi-cloud CI/CD pipeline: Vercel for Frontend SPA and Render + Docker containers for Backend API."
        ],
        duracion: "February 2026 - Present",
        badge: "In Production"
    }
];

export const estudiosEn = [
    {
        id: 0,
        nombreEstudio: "Associate Degree in Software Development",
        lugarEstudio: "UADE (Argentine Enterprise University)",
        fechaInicio: "Mar 2023",
        fechaFin: "Nov 2025",
        estado: "Graduated",
        logoInstitucion: imagenUADE,
        verMas: "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/tecnicatura-universitaria-en-desarrollo-de-software/",
        certificado: "https://drive.google.com/file/d/1WpgR1bLltxIMQrvR6Cwr7Bj4PwESMGQT/view?usp=drive_link"
    },
    {
        id: 1,
        nombreEstudio: "Bachelor's Degree in IT Management",
        lugarEstudio: "UADE (Argentine Enterprise University)",
        fechaInicio: "Mar 2025",
        fechaFin: "Jun 2027 (Expected)",
        estado: "In Progress",
        logoInstitucion: imagenUADE,
        verMas: "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/licenciatura-en-gestion-de-tecnologia-de-la-informacion/"
    },
    {
        id: 2,
        nombreEstudio: "Full Stack Web Development (Java / Spring Boot)",
        lugarEstudio: "Codo a Codo 4.0",
        fechaInicio: "Jun 2022",
        fechaFin: "Dec 2022",
        estado: "Completed",
        logoInstitucion: imagenCodoACodo,
        verMas: "https://aulasvirtuales.bue.edu.ar/",
        certificado: "https://drive.google.com/file/d/17zt6PNdnr21K_8IjAzVTBZGOzvnJreCm/view"
    },
    {
        id: 3,
        nombreEstudio: "Linux System Administration Course",
        lugarEstudio: "RedHat",
        fechaInicio: "Aug 2024",
        fechaFin: "Dec 2024",
        estado: "Completed",
        logoInstitucion: imagenRedHat,
        verMas: "https://www.redhat.com/en",
        certificado: "https://drive.google.com/file/d/1t7J0OrVKMOp6Dw5-J-TSLNgoyNAkaP1v/view"
    },
    {
        id: 4,
        nombreEstudio: "Advanced Java Software Engineering",
        lugarEstudio: "TalentoTech (Buenos Aires City Govt)",
        fechaInicio: "Mar 2026",
        fechaFin: "Jul 2026",
        estado: "Completed",
        verMas: "https://talentotech.buenosaires.gob.ar/",
        certificadoEnTramite: true
    },
    {
        id: 5,
        nombreEstudio: "Cybersecurity & Information Security Course",
        lugarEstudio: "IBM",
        fechaInicio: "Aug 2026",
        fechaFin: "Dec 2026 (Expected)",
        estado: "In Progress",
        logoInstitucion: imagenIbm,
        verMas: "https://skillsbuild.org/"
    }
];

export const experienciaLaboralEn = [
    {
        id: 1,
        puesto: "Software Developer",
        empresa: "ASISTODO Integral - Multi-Assistance Services",
        logoEmpresa: logoAsistodo,
        modalidad: "On-site / Hybrid",
        periodo: "2026 — Present",
        descripcion: "Engineering high-availability internal management platforms and modern digital products for the multi-assistance services market.",
        logros: [
            "Architected web modules and interactive interfaces with React and TypeScript integrated with FastAPI and Java microservices.",
            "Maintained and progressively refactored legacy codebases towards modern, scalable architectures.",
            "Designed and optimized queries across relational and NoSQL engines (SQL Server, MongoDB)."
        ],
        tecnologias: ["React", "TypeScript", "FastAPI", "SpringBoot", "MongoDB", "SQL Server", "Visual Basic 6"]
    },
    {
        id: 2,
        puesto: "Freelance Software Developer",
        empresa: "Independent / Self-Employed",
        modalidad: "Remote",
        periodo: "2025 — 2026",
        descripcion: "End-to-end development of custom web and desktop applications for commercial and logistics clients, from requirement analysis to production deployment.",
        logros: [
            "Engineered an offline-first Electron desktop ERP for store inventory, sales tracking, and local billing.",
            "Designed and deployed an intranet web portal for a logistics provider, streamlining internal workflow efficiency."
        ],
        tecnologias: ["Vue.js", "React", "FastAPI", "Python", "Electron", "MySQL", "MongoDB"]
    },
    {
        id: 3,
        puesto: "Technical Instructor & Mentor",
        empresa: "Freelance / Mentor",
        periodo: "2023 — 2026",
        descripcion: "Delivering 1-on-1 private tutoring and technical mentoring in programming, data structures, algorithms, and mathematics for university students.",
        logros: [
            "Guided students through Object-Oriented Programming (OOP), Data Structures, and full stack web development principles.",
            "Fostered technical problem-solving skills, code quality best practices, and algorithmic thinking."
        ],
        tecnologias: ["Programming Logic", "Data Structures", "Algorithms", "Mathematics"]
    }
];
