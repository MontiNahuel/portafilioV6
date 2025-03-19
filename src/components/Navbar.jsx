import { useState, useEffect } from "react";
import "../styles/navbar.css"; // Importamos el archivo de estilos
export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="nav-container">
        <img className="logo" src="src\assets\icons\portafolio.svg" alt="" />
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#sobre mi">Sobre Mi</a></li>
          <li><a href="#estudios">Estudios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
