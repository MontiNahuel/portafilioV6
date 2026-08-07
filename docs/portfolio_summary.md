# HealthGrid — Módulo de Historia Clínica Electrónica (HCE)

## 📌 Visión General
Sistema backend de alto rendimiento para la gestión de Historias Clínicas Electrónicas, construido con **FastAPI** y operaciones de base de datos **100% asíncronas**. 

Este proyecto fue desarrollado originalmente como el **Módulo 1** del ecosistema distribuido "HealthGrid", diseñado con una arquitectura orientada a microservicios para integrarse a través de APIs REST y Webhooks con el resto de la infraestructura hospitalaria (Facturación, Sala de Espera, Gestión de Camas y el Core Administrativo).

> [!NOTE]
> **Refactorización y Aislamiento:** Debido a que los microservicios externos del ecosistema cesaron sus operaciones, este módulo fue refactorizado para operar de forma **totalmente autónoma e independiente**. Se integraron catálogos propios (Core de Usuarios, Sedes y Obras Sociales) simulando a los servicios externos, lo que permite desplegarlo y probarlo de manera aislada sin perder su esencia modular original.

---

## 🛠️ Stack Tecnológico
- **Framework Core:** FastAPI (Python)
- **Base de Datos:** PostgreSQL
- **ORM:** SQLAlchemy 2.0 (Motor Asíncrono con `asyncpg`)
- **Migraciones:** Alembic
- **Validación y Esquemas:** Pydantic
- **Seguridad & Auth:** JWT (JSON Web Tokens), Role-Based Access Control (RBAC)
- **Despliegue:** Render / Vercel (Frontend en Vue.js / TypeScript)

---

## 🚀 Logros Técnicos y Soluciones Arquitectónicas

### 1. Rendimiento Asíncrono y Optimización de Base de Datos
- Implementación de un flujo de datos no bloqueante desde el endpoint HTTP hasta el motor de la base de datos.
- **Prevención del problema "N+1 Queries":** Resolución proactiva de cuellos de botella en la serialización de datos anidados (ej. carga de médicos con múltiples especialidades y planes de obras sociales) utilizando estrategias de Eager Loading (`selectinload` y `joinedload` en SQLAlchemy), mitigando excepciones críticas de concurrencia (`MissingGreenlet`).

### 2. Diseño Modular (Domain-Driven Design)
- Separación estricta de dominios de negocio (Core, Turnos, Fichas Médicas, Recetas, Órdenes).
- Estructuras de respuesta (Schemas) y lógica de base de datos (Services) desacopladas para maximizar la mantenibilidad y escalabilidad del sistema.

### 3. Sistema de Integración Híbrido (Mock / Live)
- Arquitectura lista para comunicarse con ecosistemas externos complejos.
- Implementación de un patrón de configuración (`INTEGRATION_MODE`) manejado por variables de entorno que permite arrancar el servicio de forma aislada (Mocking de APIs externas) o conectarlo a servicios reales en producción sin alterar el código de los controladores.

### 4. Robustez y Seguridad
- Rutas protegidas mediante dependencias inyectables.
- Autenticación segura mediante tokens firmados (soporte preparado para SSO).
- APIs completamente auto-documentadas (Swagger UI / OpenAPI).

### 5. Cliente Frontend Integrado (SPA)
- **Interfaz Reactiva:** Desarrollo de un cliente web robusto utilizando **Vue.js 3** y **TypeScript**, empaquetado con **Vite** para una experiencia de usuario rápida y fluida.
- **Gestión Avanzada de Estado y API:** Consumo del backend asíncrono mediante interceptores de **Axios** (manejo inteligente de expiración de sesiones JWT y errores) y renderizado dinámico de interfaces complejas (Grillas de turnos, paneles de administración médica y asignación de coberturas).
- **Despliegue Cloud-Native:** Configurado para CI/CD continuo en **Vercel**, consumiendo las APIs distribuidas independientemente en Render.

---

## 💡 Por qué este proyecto destaca
El desarrollo de este sistema demuestra una comprensión profunda de problemas comunes en arquitecturas modernas (como la serialización asíncrona en ORMs) y evidencia el uso de buenas prácticas de código (Typing estricto, commits semánticos, manejo limpio de variables de entorno y separación de responsabilidades), acercándose fuertemente a los estándares utilizados en sistemas de software del sector salud.
