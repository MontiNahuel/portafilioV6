import React, {useState} from "react";
import emailjs from "@emailjs/browser";

function FormContacto() {

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });
    
    const [status, setStatus] = useState(""); // Estado para mensajes de éxito/error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_nx62bss"; 
        const templateID = "template_3431zyk"; 
        const publicKey = "FjktPO1SA97E1SEF7"; 
    
        const templateParams = {
            from_name: formData.nombre,
            from_email: formData.email,
            message: formData.mensaje,
        };
    
        emailjs
          .send(serviceID, templateID, templateParams, publicKey)
          .then((response) => {
            console.log("Correo enviado!", response);
            setStatus("Mensaje enviado con éxito 🎉");
            setFormData({ nombre: "", email: "", mensaje: "" }); // Limpiar el formulario
          })
          .catch((error) => {
            console.error("Error al enviar el correo", error);
            setStatus("Error al enviar el mensaje ❌");
          });
    };

    return (
            <form className="contact__form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                className="contact__input"
                value={formData.nombre}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                className="contact__input"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="mensaje"
                placeholder="Escribe tu mensaje..."
                className="contact__textarea"
                value={formData.mensaje}
                onChange={handleChange}
                required
            />
            <button type="submit" className="contact__button">Enviar</button>
            {status && <p className="contact__status">{status}</p>}
            </form>
    );
}

export default FormContacto;