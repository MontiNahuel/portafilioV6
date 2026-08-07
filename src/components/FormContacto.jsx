import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "../context/ToastContext";

export default function FormContacto() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

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
      .then(() => {
        setStatus("success");
        showToast("¡Mensaje enviado con éxito! Te responderé pronto. 🎉", "success", 4000);
        setFormData({ nombre: "", email: "", mensaje: "" });
      })
      .catch((error) => {
        console.error("Error al enviar el correo", error);
        setStatus("error");
        showToast("Ocurrió un error al enviar el mensaje. Intenta por otro medio.", "error", 4000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {/* Campo Nombre */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-300 ml-1">Nombre completo</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ej: Juan Pérez"
          className="w-full bg-slate-900/50 border border-slate-700/80 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
          value={formData.nombre}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Campo Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-300 ml-1">Correo electrónico</label>
        <input
          type="email"
          name="email"
          placeholder="ejemplo@correo.com"
          className="w-full bg-slate-900/50 border border-slate-700/80 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Campo Mensaje */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-300 ml-1">Mensaje</label>
        <textarea
          name="mensaje"
          rows="4"
          placeholder="Cuéntame sobre tu proyecto o propuesta..."
          className="w-full bg-slate-900/50 border border-slate-700/80 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none"
          value={formData.mensaje}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Botón Submit */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`mt-2 w-full inline-flex justify-center items-center gap-2 font-bold py-3.5 rounded-xl transition-all duration-300 ${
          isSubmitting 
            ? "bg-slate-700 text-slate-400 cursor-not-allowed" 
            : "bg-sky-400 hover:bg-sky-300 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:-translate-y-0.5"
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </>
        ) : (
          "Enviar Mensaje"
        )}
      </button>

      {/* Mensajes de Status */}
      {status === "success" && (
        <div className="mt-2 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-center font-medium text-sm">
          ¡Mensaje enviado con éxito! Te responderé pronto. 🎉
        </div>
      )}
      {status === "error" && (
        <div className="mt-2 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center font-medium text-sm">
          Ocurrió un error al enviar el mensaje. Intenta por otro medio. ❌
        </div>
      )}
    </form>
  );
}