import React, { createContext, useContext, useState, useEffect } from "react";
import { uiTranslations } from "../data/uiTranslations";
import { getDataForLanguage } from "../data";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("portfolio_language") || "es";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_language", language);
  }, [language]);

  const setLanguage = (lang) => {
    if (["es", "en", "pt"].includes(lang)) {
      setLanguageState(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      if (prev === "es") return "en";
      if (prev === "en") return "pt";
      return "es";
    });
  };

  const t = (key) => {
    if (uiTranslations[language] && uiTranslations[language][key]) {
      return uiTranslations[language][key];
    }
    // Fallback to Spanish if key missing in current language
    if (uiTranslations.es && uiTranslations.es[key]) {
      return uiTranslations.es[key];
    }
    return key;
  };

  const localizedData = getDataForLanguage(language);

  const navLinks = [
    { href: "#experiencia", label: t("nav.experiencia") },
    { href: "#proyectos", label: t("nav.proyectos") },
    { href: "#sobre-mi", label: t("nav.sobreMi") },
    { href: "#estudios", label: t("nav.estudios") },
    { href: "#contacto", label: t("nav.contacto") },
  ];

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isEs: language === "es",
    isEn: language === "en",
    isPt: language === "pt",
    t,
    navLinks,
    ...localizedData
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
