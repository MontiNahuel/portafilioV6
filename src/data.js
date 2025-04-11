import imagenMunicipio from "../src/assets/municipio.jpg";
import imagenBandUp from "../src/assets/bandup.jpg";
import imagenGestionStock from "../src/assets/gestion-de-stock.jpg";
import imagenEcommerce from "../src/assets/ecommerceBackEnd.jpeg";
import imagenUADE from "../src/assets/icons/UADE-log.svg";
import imagenCodoACodo from "../src/assets/icons/codoacodo.png";
import imagenSqlServer from "../src/assets/icons/sql-server.svg";
import imagenJava from "../src/assets/icons/java.svg";
import imagenSpringBoot from "../src/assets/icons/springboot.svg";
import imagenReact from "../src/assets/icons/react-native.svg";
import imagenFirebase from "../src/assets/icons/firebase.svg";
import imagenNodeJs from "../src/assets/icons/node-js.svg";
import imagenNeo4j from "../src/assets/icons/neo4j.svg";
import imagenMongoDB from "../src/assets/icons/mongodb.svg";
import imagenGithub from "../src/assets/icons/github.svg";
import imagenLinkedin from "../src/assets/icons/linkedin.svg";
import imagenEclipse from "../src/assets/icons/eclipse.svg";


export const proyectosIntroduccion = [
    {
        id: 0,
        nombreProyecto: "Aplicación de reclamos/red social para un municipio",
        descripcionProyecto: "Aplicación dedicada a la gestión de reclamos, sugerencias y eventos de un municipio; ademas de eso cuenta con una red social para conectar a los vecinos entre sí.",
        imagenProyecto: imagenMunicipio,
        estadoProyecto: "Completado"
    },
    {
        id: 1,
        nombreProyecto: "Red social dedicada a músicos",
        descripcionProyecto: "Proyecto de red social dedicada a músicos, donde pueden compartir sus creaciones y conocer a otros músicos.",
        imagenProyecto: imagenBandUp,
        estadoProyecto: "Completado"
    },
    {
        id: 2,
        nombreProyecto: "Aplicación de escritorio para la gestión de un comercio",
        descripcionProyecto: "Aplicación de escritorio dedicada a la gestión de un comercio, donde se pueden gestionar los productos y ventas.",
        imagenProyecto: imagenGestionStock,
        estadoProyecto: "Completado"
    },
    {
        id: 3,
        nombreProyecto: "Backend para un ecommerce",
        descripcionProyecto: "Backend desarrollado para un ecommerce con todas sus funcionalidades básicas, utilizando dos bases de datos.",
        imagenProyecto: imagenEcommerce,
        estadoProyecto: "Completado"
    }
]

export const proyectos = [
    {
      id: 1,
      nombreProyecto: "Aplicación de reclamos/red social para un municipio",
      descripcionProyecto: `Aplicación dedicada a la gestión de reclamos, sugerencias y eventos de un municipio; ademas de eso cuenta con un apartado para que los vecinos puedan publicar sus servicios personales, por ejemplo un tal Juan que se dedica a la plomería o el dueño de un restaurante que quiere promocionar su local.
      Cada persona cuenta con su propio usuario dentro de la aplicación, que se divide en dos categorías: vecino e inspector; este último solamente tiene la posibilidad de validar o generar los reclamos con los que esté enlazado.`,
      imagenProyecto: imagenMunicipio,
      estadoProyecto: "Completado",
      enlaces: [{repositorio: "FrontEnd", url: "https://github.com/MontiNahuel/TPO-DA1-Front-End", icono: "../src/assets/icons/github.svg"}, {repositorio: "BackEnd", url: "https://github.com/MontiNahuel/TPO-DA1-Back-End", icono: "../src/assets/icons/github.svg"}],
      tecnologias: [{nombre: "React-Native", icono: imagenReact}, {nombre: "SpringBoot", icono: imagenSpringBoot}, {nombre: "Java", icono: imagenJava}, {nombre: "Sql-Server", icono: imagenSqlServer}]
    },
    {
      id: 2,
      nombreProyecto: "Red social dedicada a músicos",
      descripcionProyecto: "Naciendo de una propuesta de idea innovadora, con un grupo de desarrollo se nos ocurrió plantear una solución a una problemática que no está bien cubierta, como puede ser la unión de músicos para formar una banda y/o cantantes con productores, etc.\n La idea es que los usuarios puedan crear un perfil, subir sus canciones, buscar otros usuarios y contactarlos para formar una banda, o simplemente para colaborar en un proyecto musical.",
      imagenProyecto: imagenBandUp,
      estadoProyecto: "Completado",
      enlaces: [{repositorio: "FrontEnd y BackEnd", url: "https://github.com/MontiNahuel/BandUpFinalPrevio", icono: "../src/assets/icons/github.svg"}],
      tecnologias: [{nombre: "React-Native", icono: imagenReact}, {nombre: "NodeJs", icono: imagenNodeJs}, {nombre: "Firebase", icono: imagenFirebase}]
    },
    {
      id: 3,
      nombreProyecto: "Aplicación de escritorio para la gestión de un comercio",
      descripcionProyecto: "Desarrollada para satisfacer las necesidades básicas de control de stock, permitiendo registrar cada producto individualmente, así como sus cantidades, nombre, precio, etc.\nPor otra parte permite registrar las ventas, con la posibilidad de seleccionar los productos que se vendieron y la cantidad de cada uno, generando un ticket con la información de la venta.",
      imagenProyecto: imagenGestionStock,
      estadoProyecto: "Completado",
      enlaces: [{repositorio: "Aplicación", url: "https://github.com/MontiNahuel/TPO-POO-DesktopApp", icono: "../src/assets/icons/github.svg"}],
      tecnologias: [{nombre: "Java", icono: imagenJava}, {nombre: "Swing", icono: imagenEclipse}]
    },
    {
      Id: 4,
      nombreProyecto: "Backend para un ecommerce",
      descripcionProyecto: "Desarrollado con la finalidad de crear una API que interactúe con mas de una base de datos, y que sean distintas entre sí, implementada inteligentemente para que sea escalable y fácil de mantener.\n Actualmente está en desarrollo un FrontEnd que interactúe con esta API ya que su funcionalidad está accesible a través de una consola.\nPermite la creación de un usuario, el cual tiene un carrito propio y permite agregar productos a este, además de poder realizar compras, registrar distintos métodos de pago y poder seleccionar cual se desea usar.\n Por otro lado cuenta con un usuario admin para poder visualizar las ventas, registrar productos, etc.",
      imagenProyecto: imagenEcommerce,
      estadoProyecto: "Completado",
      enlaces: [{repositorio: "Backend", url: "https://github.com/MontiNahuel/TPO-IDD2-Back-End", icono: "../src/assets/icons/github.svg"}],
      tecnologias: [{nombre: "SpringBoot", icono: imagenSpringBoot}, {nombre: "Java", icono: imagenJava}, {nombre: "Neo4J", icono: imagenNeo4j}, {nombre: "MongoDB", icono: imagenMongoDB}]
    }
  ];

export const estudios = [
    {
        id: 0,
        nombreEstudio: "Tecnicatura Universitaria en Desarrollo de Software",
        lugarEstudio: "Universidad Argentina de la Empresa",
        fechaInicio: "2023",
        fechaFin: "2025 (Estimado)",
        estado: "En-curso",
        logoInstitucion: imagenUADE,
        verMas: "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/tecnicatura-universitaria-en-desarrollo-de-software/"
    },
    {
        id: 1,
        nombreEstudio: "Licenciatura en Gestión de Tecnología de la Información",
        lugarEstudio: "Universidad Argentina de la Empresa",
        fechaInicio: "2025",
        fechaFin: "2027 (Estimado)",
        estado: "En-curso",
        logoInstitucion: imagenUADE,
        verMas: "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/licenciatura-en-gestion-de-tecnologia-de-la-informacion/"
    },
    {
        id: 2,
        nombreEstudio: "Curso Full Stack Dev Con Orientacion en Java/Springboot",
        lugarEstudio: "Codo a Codo 4.0",
        fechaInicio: "Jun 2022",
        fechaFin: "Dic 2022",
        estado: "Completado",
        logoInstitucion: imagenCodoACodo,
        verMas: "https://aulasvirtuales.bue.edu.ar/",
        certificado: "https://drive.google.com/file/d/17zt6PNdnr21K_8IjAzVTBZGOzvnJreCm/view"
    }
];

export const tecnologiasUsadas = [
    {
        nombre: "React",
        icono: imagenReact
    },
    {
        nombre: "SpringBoot",
        icono: imagenSpringBoot
    },
    {
        nombre: "Java",
        icono: imagenJava
    },
    {
        nombre: "Firebase",
        icono: imagenFirebase
    },
    {
        nombre: "Sql-Server",
        icono: imagenSqlServer
    }
];

export const datosContacto = [
    {
        tipo: "Email",
        contacto: "montinahuel@gmail.com"
    },
    {
        tipo: "Telefono",
        contacto: "+54 9 11 6518-1087"
    }
];

export const hipervFooter = [
    [
        "Inicio",
        "Proyectos",
        "Sobre Mi",
        "Estudios",
        "Contacto"
    ],
    [
        {url: "https://www.linkedin.com/in/nahuel-monti-5ba522241/", icono: imagenLinkedin},
        {url: "https://github.com/MontiNahuel", icono: imagenGithub},
    ]
]
