import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "info", duration = 3000) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    
    setToasts((prevToasts) => [...prevToasts, { id, message, type, duration }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      {/* Contenedor flotante de Toasts */}
      <div className="fixed bottom-6 right-6 z-[10000] flex flex-col gap-3 pointer-events-none max-w-sm w-full px-4 sm:px-0">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast debe ser utilizado dentro de un ToastProvider");
  }
  return context;
}

// Sub-componente para cada Toast individual
function ToastItem({ toast, onClose }) {
  const { message, type } = toast;

  // Selección de ícono y color según el tipo
  const getTypeStyles = () => {
    switch (type) {
      case "copy":
        return {
          icon: (
            <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          ),
          badgeBg: "bg-sky-500/10 border-sky-500/20",
          glow: "border-sky-500/30 shadow-[0_0_20px_rgba(56,189,248,0.2)]",
        };
      case "download":
        return {
          icon: (
            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          ),
          badgeBg: "bg-blue-500/10 border-blue-500/20",
          glow: "border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]",
        };
      case "success":
        return {
          icon: (
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ),
          badgeBg: "bg-emerald-500/10 border-emerald-500/20",
          glow: "border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
        };
      default:
        return {
          icon: (
            <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badgeBg: "bg-slate-800 border-slate-700",
          glow: "border-slate-700 shadow-lg",
        };
    }
  };

  const style = getTypeStyles();

  return (
    <div 
      className={`pointer-events-auto flex items-center justify-between gap-3 p-4 bg-slate-900/95 border ${style.glow} backdrop-blur-xl rounded-xl text-slate-100 animate-[toastSlideIn_0.35s_cubic-bezier(0.16,1,0.3,1)_forwards]`}
      role="status"
      aria-live="polite"
    >
      <style>
        {`
          @keyframes toastSlideIn {
            from {
              opacity: 0;
              transform: translateY(24px) scale(0.92);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>

      <div className="flex items-center gap-3 min-w-0">
        <div className={`p-2 rounded-lg border ${style.badgeBg} shrink-0`}>
          {style.icon}
        </div>
        <p className="text-sm font-medium leading-tight text-slate-200 truncate">
          {message}
        </p>
      </div>

      <button
        onClick={onClose}
        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors shrink-0"
        aria-label="Cerrar notificación"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
