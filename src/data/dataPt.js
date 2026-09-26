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

export const proyectosIntroduccionPt = [
    {
        id: 1,
        nombreProyecto: "Plataforma de Reclamações e Rede Social Municipal",
        descripcionProyecto: "Aplicação dedicada à gestão de reclamações, sugestões e eventos municipais; conta também com uma rede social para conectar os moradores.",
        imagenProyecto: imagenMunicipio,
        estadoProyecto: "Concluído"
    },
    {
        id: 2,
        nombreProyecto: "Rede Social para Músicos e Criadores",
        descripcionProyecto: "Plataforma de rede social dedicada a músicos para compartilhar faixas, encontrar parceiros de banda e colaborar em projetos musicais.",
        imagenProyecto: imagenBandUp,
        estadoProyecto: "Concluído"
    },
    {
        id: 3,
        nombreProyecto: "Aplicação Desktop de Gestão de Estoque e Comércio",
        descripcionProyecto: "Software desktop dedicado à gestão comercial, controle de estoque de produtos, vendas e emissão de comprovantes.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Concluído"
    },
    {
        id: 4,
        nombreProyecto: "Backend API Multi-Banco de Dados para E-Commerce",
        descripcionProyecto: "API backend desenvolvida para e-commerce com carrinho de compras, pagamentos e administração usando integração dual de bancos de dados.",
        imagenProyecto: imagenEcommerce,
        estadoProyecto: "Concluído"
    },
    {
        id: 5,
        nombreProyecto: "Sistema ERP e Administração de Negócios",
        descripcionProyecto: "Aplicação desktop desenvolvida para a administração comercial local, permitindo gerenciar produtos, vendas e clientes de forma simples.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Concluído (Recebendo atualizações)"
    }
];

export const proyectosPt = [
    {
        id: 1,
        nombreProyecto: "Plataforma de Reclamações e Rede Social Municipal",
        descripcionProyecto: `Aplicação dedicada à gestão de reclamações, sugestões e eventos de um município. Conta com uma seção de serviços pessoais onde moradores podem divulgar trabalho autônomo (como encanamento, eletricidade ou restaurantes locais).
Cada usuário tem seu perfil na plataforma dividida em Morador ou Inspetor, este último com permissões de validação e geração de chamados.`,
        imagenProyecto: imagenMunicipio,
        estadoProyecto: "Concluído",
        enlaces: [{ repositorio: "FrontEnd", url: "https://github.com/MontiNahuel/TPO-DA1-Front-End", icono: FaGithub }, { repositorio: "BackEnd", url: "https://github.com/MontiNahuel/TPO-DA1-Back-End", icono: FaGithub }],
        tecnologias: [{ nombre: "React-Native", icono: SiReact }, { nombre: "SpringBoot", icono: SiSpringboot }, { nombre: "Java", icono: FaJava }, { nombre: "SQL Server", icono: FaDatabase }]
    },
    {
        id: 2,
        nombreProyecto: "Rede Social para Músicos e Criadores",
        descripcionProyecto: "Criada para resolver o desafio de conectar músicos, cantores e produtores para formar bandas ou colaborar em projetos artísticos.\nOs usuários criam perfis personalizados, sobem faixas originais e entram em contato com outros artistas.",
        imagenProyecto: imagenBandUp,
        estadoProyecto: "Concluído",
        enlaces: [{ repositorio: "FrontEnd & BackEnd", url: "https://github.com/MontiNahuel/BandUpFinalPrevio", icono: FaGithub }],
        tecnologias: [{ nombre: "React-Native", icono: SiReact }, { nombre: "Node.js", icono: SiNodedotjs }, { nombre: "Firebase", icono: SiFirebase }]
    },
    {
        id: 3,
        nombreProyecto: "Aplicação Desktop de Gestão de Estoque e Comércio",
        descripcionProyecto: "Desenvolvida para o controle de estoque de produtos, preços e quantidades.\nPermite registrar vendas, escolher produtos no carrinho e gerar comprovantes automaticamente.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Concluído",
        enlaces: [{ repositorio: "Aplicação", url: "https://github.com/MontiNahuel/TPO-POO-DesktopApp", icono: FaGithub }],
        tecnologias: [{ nombre: "Java", icono: FaJava }, { nombre: "Swing", icono: SiEclipseide }]
    },
    {
        id: 4,
        nombreProyecto: "Backend API Multi-Banco de Dados para E-Commerce",
        descripcionProyecto: "API REST projetada para interagir com múltiplos bancos de dados heterogêneos (relacionais e NoSQL) de forma escalável.\nPossui autenticação de usuário, carrinho de compras, gateway de pagamento e painel administrativo.",
        imagenProyecto: imagenEcommerce,
        estadoProyecto: "Concluído",
        enlaces: [{ repositorio: "Backend", url: "https://github.com/MontiNahuel/TPO-IDD2-Back-End", icono: FaGithub }],
        tecnologias: [{ nombre: "SpringBoot", icono: SiSpringboot }, { nombre: "Java", icono: FaJava }, { nombre: "Neo4J", icono: SiNeo4J }, { nombre: "MongoDB", icono: SiMongodb }]
    },
    {
        id: 5,
        nombreProyecto: "Sistema ERP e Administração de Negócios",
        descripcionProyecto: "Solução desktop completa projetada para execução local offline com interface amigável. Permite gerenciar estoques, faturamento e base de clientes.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Concluído (Recebendo atualizações)",
        tecnologias: [{ nombre: "JavaScript", icono: SiJavascript }, { nombre: "React", icono: SiReact }, { nombre: "Electron", icono: SiElectron }, { nombre: "NeDB", icono: FaDatabase }]
    }
];

export const proyectosDestacadosPt = [
    {
        id: 101,
        nombreProyecto: "HealthGrid PEP (Prontuário Eletrônico do Paciente)",
        descripcionProyecto: "Sistema de alto desempenho para gestão de Prontuários Eletrônicos, originalmente desenvolvido como módulo central de uma arquitetura hospitalar de 10 microsserviços (Domain-Driven Design).\nRefatorado e isolado com sucesso para operar autonomamente com catálogos próprios de integração.\nFluxo de dados 100% assíncrono em FastAPI e PostgreSQL, resolvendo problemas de concorrência e 'N+1 Queries' com estratégias de Eager Loading.",
        imagenProyecto: imagenBannerHCE,
        estadoProyecto: "Arquitetura Distribuída",
        enlaces: [
            { nombre: "Back-End", url: "https://github.com/MontiNahuel/hce-back-end", icono: FaGithub },
            { nombre: "Front-End", url: "https://github.com/MontiNahuel/hce-front-end", icono: FaGithub }
        ],
        enlaceServicio: { nombre: "Acessar Sistema ao Vivo", url: "https://hce-front-end-brown.vercel.app/" },
        tecnologias: [
            { nombre: "FastAPI", icono: SiFastapi },
            { nombre: "PostgreSQL", icono: SiPostgresql },
            { nombre: "SQLAlchemy", icono: SiSqlalchemy },
            { nombre: "Vue.js", icono: SiVuedotjs },
            { nombre: "TypeScript", icono: SiTypescript }
        ],
        arquitectura: [
            "Fluxo de dados não bloqueante do endpoint HTTP ao banco de dados.",
            "Resolução proativa do problema 'N+1 Queries' usando Eager Loading (selectinload e joinedload no SQLAlchemy).",
            "Design Guiado por Domínio (DDD): Separação estrita de subdomínios de negócio.",
            "Módulo isolado capaz de operar de forma autônoma com catálogos locais."
        ],
        duracion: "Abril de 2026 - Presente",
        galeria: [
            { src: diagramaHealthGrid, caption: "Diagrama de Arquitetura de Microsserviços (DDD)" },
            { src: visualizacionFichaMedica, caption: "Visão do histórico médico e resumo do paciente" },
            { src: visualizacionEpisodios, caption: "Visão de episódios e linha do tempo de tratamentos" }
        ],
        badge: "Em Produção (Atualizações ativas)"
    },
    {
        id: 102,
        nombreProyecto: "Smart CRM (Gestão & Análise IA)",
        descripcionProyecto: "Sistema CRM abrangente projetado para equipes de trabalho com suporte em tempo real e análise por inteligência artificial.\nInterface SPA rápida em Vue 3 com backend de alta concorrência em FastAPI.\nPersistência dual: MySQL para dados transacionais e MongoDB para chat via WebSockets e resumos automatizados por IA.",
        imagenProyecto: imagenBannerCRM,
        estadoProyecto: "Em Produção",
        enlaces: [
            { nombre: "Back-End", url: "https://github.com/MontiNahuel/repo-crm-back-end", icono: FaGithub },
            { nombre: "Front-End", url: "https://github.com/MontiNahuel/repo-crm", icono: FaGithub }
        ],
        enlaceServicio: { nombre: "Acessar Sistema ao Vivo", url: "https://repo-crm.vercel.app/" },
        tecnologias: [
            { nombre: "Vue.js", icono: SiVuedotjs },
            { nombre: "TypeScript", icono: SiTypescript },
            { nombre: "FastAPI", icono: SiFastapi },
            { nombre: "MySQL", icono: FaDatabase },
            { nombre: "MongoDB", icono: SiMongodb }
        ],
        arquitectura: [
            "Arquitetura Monólito Modular seguindo o padrão Controller-Service-Repository.",
            "Persistência Poliglota: MySQL para módulos transacionais e MongoDB para alta concorrência (Chat ao Vivo & IA).",
            "Gestão de estado escalável (Pinia) e interceptores globais Axios para renovação silenciosa de tokens.",
            "Canais de comunicação bidirecionais assíncronos via WebSockets (socket.io).",
            "Pipeline CI/CD automatizado: Vercel para o Frontend SPA e Render + Docker para o Backend."
        ],
        duracion: "Fevereiro de 2026 - Presente",
        badge: "Em Produção"
    }
];

export const estudiosPt = [
    {
        id: 0,
        nombreEstudio: "Tecnologia Universitária em Desenvolvimento de Software",
        lugarEstudio: "UADE (Universidade Argentina da Empresa)",
        fechaInicio: "Mar 2023",
        fechaFin: "Nov 2025",
        estado: "Graduado",
        logoInstitucion: imagenUADE,
        verMas: "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/tecnicatura-universitaria-en-desarrollo-de-software/",
        certificado: "https://drive.google.com/file/d/1WpgR1bLltxIMQrvR6Cwr7Bj4PwESMGQT/view?usp=drive_link"
    },
    {
        id: 1,
        nombreEstudio: "Bacharelado em Gestão de Tecnologia da Informação",
        lugarEstudio: "UADE (Universidade Argentina da Empresa)",
        fechaInicio: "Mar 2025",
        fechaFin: "Jun 2027 (Estimado)",
        estado: "Em Curso",
        logoInstitucion: imagenUADE,
        verMas: "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/licenciatura-en-gestion-de-tecnologia-de-la-informacion/"
    },
    {
        id: 2,
        nombreEstudio: "Desenvolvimento Web Full Stack (Java / Spring Boot)",
        lugarEstudio: "Codo a Codo 4.0",
        fechaInicio: "Jun 2022",
        fechaFin: "Dez 2022",
        estado: "Concluído",
        logoInstitucion: imagenCodoACodo,
        verMas: "https://aulasvirtuales.bue.edu.ar/",
        certificado: "https://drive.google.com/file/d/17zt6PNdnr21K_8IjAzVTBZGOzvnJreCm/view"
    },
    {
        id: 3,
        nombreEstudio: "Curso de Administração de Sistemas Linux",
        lugarEstudio: "RedHat",
        fechaInicio: "Ago 2024",
        fechaFin: "Dez 2024",
        estado: "Concluído",
        logoInstitucion: imagenRedHat,
        verMas: "https://www.redhat.com/en",
        certificado: "https://drive.google.com/file/d/1t7J0OrVKMOp6Dw5-J-TSLNgoyNAkaP1v/view"
    },
    {
        id: 4,
        nombreEstudio: "Engenharia de Software Java Avançado",
        lugarEstudio: "TalentoTech (Gov. Cidade de Buenos Aires)",
        fechaInicio: "Mar 2026",
        fechaFin: "Jul 2026",
        estado: "Concluído",
        verMas: "https://talentotech.buenosaires.gob.ar/",
        certificadoEnTramite: true
    },
    {
        id: 5,
        nombreEstudio: "Curso de Cibersegurança e Segurança da Informação",
        lugarEstudio: "IBM",
        fechaInicio: "Ago 2026",
        fechaFin: "Dez 2026 (Estimado)",
        estado: "Em Curso",
        logoInstitucion: imagenIbm,
        verMas: "https://skillsbuild.org/"
    }
];

export const experienciaLaboralPt = [
    {
        id: 1,
        puesto: "Software Developer",
        empresa: "ASISTODO Integral - Serviços de Multiasistência",
        logoEmpresa: logoAsistodo,
        modalidad: "Presencial / Híbrido",
        periodo: "2026 — Presente",
        descripcion: "Desenvolvimento e evolução de sistemas de gestão interna de alta disponibilidade e produtos digitais para o setor de serviços e multiasistência.",
        logros: [
            "Desenvolvimento de módulos web e interfaces interativas com React e TypeScript conectadas a serviços em FastAPI e Java.",
            "Manutenção e refatoração progressiva de sistemas legados para arquiteturas modernas e escaláveis.",
            "Design e otimização de consultas em bancos de dados relacionais e NoSQL (SQL Server, MongoDB)."
        ],
        tecnologias: ["React", "TypeScript", "FastAPI", "SpringBoot", "MongoDB", "SQL Server", "Visual Basic 6"]
    },
    {
        id: 2,
        puesto: "Freelance Software Developer",
        empresa: "Projetos Independentes / Autônomo",
        modalidad: "Remoto",
        periodo: "2025 — 2026",
        descripcion: "Desenvolvimento end-to-end de aplicações web e desktop sob medida para clientes comerciais e logística, da concepção à implantação.",
        logros: [
            "Desenvolvimento de aplicação desktop em Electron para controle de estoque, clientes e faturamento local.",
            "Design e implantação de portal web intranet para empresa de logística, otimizando a eficiência operacional."
        ],
        tecnologias: ["Vue.js", "React", "FastAPI", "Python", "Electron", "MySQL", "MongoDB"]
    },
    {
        id: 3,
        puesto: "Professor Particular & Mentor Técnico",
        empresa: "Freelance / Mentor",
        periodo: "2023 — 2026",
        descripcion: "Aulas particulares e mentoria técnica personalizada em programação, estruturas de dados, algoritmos e matemática para estudantes universitários.",
        logros: [
            "Orientação pedagógica em Programação Orientada a Objetos (POO), Estruturas de Dados e Desenvolvimento Web.",
            "Incentivo à resolução de problemas analíticos complexos e boas práticas de código."
        ],
        tecnologias: ["Lógica de Programação", "Estruturas de Dados", "Algoritmos", "Matemática"]
    }
];
