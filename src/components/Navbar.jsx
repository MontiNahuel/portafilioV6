import { useState, useEffect } from "react";
import "../styles/navbar.css"; // Importamos el archivo de estilos
export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="nav-container">
        <img className="logo" src="src\assets\icons\portafolio.svg" alt="" />

        {/* Botón hamburguesa (solo visible en mobile por CSS) */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`} // Añadimos la clase 'open' cuando es true
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><button className="boton-navbar" onClick={() => setMenuOpen(false)}><a href="#inicio">Inicio</a></button></li>
          <li><button className="boton-navbar" onClick={() => setMenuOpen(false)}><a href="#proyectos">Proyectos</a></button></li>
          <li><button className="boton-navbar" onClick={() => setMenuOpen(false)}><a href="#sobre mi">Sobre Mi</a></button></li>
          <li><button className="boton-navbar" onClick={() => setMenuOpen(false)}><a href="#estudios">Estudios</a></button></li>
          <li><button className="boton-navbar" onClick={() => setMenuOpen(false)}><a href="#contacto">Contacto</a></button></li>
        </ul>
      </div>
    </nav>
  );
}
