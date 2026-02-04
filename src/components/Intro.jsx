import { useEffect, useState } from "react";
import "../styles/Intro.css";

export default function Intro({ backgroundImage }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section 
      className={`intro ${fadeIn ? "visible" : ""}`} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="inicio"
    >
      <div className="overlay"></div>
      <div className="intro-content">
        <h1>¡Hola! Soy <span className="highlight">Nahuel Monti</span></h1>
        <p>Desarrollador web Full Stack especializado en React y Java.</p>
        <div className="buttons-intro">
          <a href="#proyectos" className="cta-button">Ver Proyectos</a>
          <a href="https://drive.google.com/file/d/1HVD9iAz1azPJKhVpz1jsgtphO5xbTFpQ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cv-button">Descargar CV</a>
        </div>
      </div>
    </section>
  );
}
