import React from "react";
import "../styles/footer.css";
import { hipervFooter } from "../data";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__hipervinculos">
                <ul className="footer__hipervinculos__lista">
                    {hipervFooter[0].map((hipervinculo, index) => (
                        <li key={index} className="footer__hipervinculos__item"><a href={`#${hipervinculo.toLowerCase()}`} className="footer__hipervinculo">{hipervinculo}</a></li>
                    ))}
                </ul>
                <ul className="footer__hipervinculos__lista">
                    {hipervFooter[1].map((hipervinculo, index) => (
                        <li key={index} className="footer__hipervinculos__item">
                            <a href={hipervinculo.url} className="footer__hipervinculo" target="_blank" rel="noreferrer noopener">
                                <img src={hipervinculo.icono} alt="" className="footer__hipervinculo__icono"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <span className="footer__texto">Nahuel Monti © 2025 <br /> Todos los derechos reservados</span>
        </footer>
    );
}

export default Footer;