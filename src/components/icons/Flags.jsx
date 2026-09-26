import React from "react";

export function FlagES({ className = "w-4 h-3 rounded-sm overflow-hidden shrink-0 shadow-sm" }) {
  return (
    <svg className={className} viewBox="0 0 750 500" xmlns="http://www.w3.org/2000/svg">
      <rect width="750" height="500" fill="#AA151B"/>
      <rect y="125" width="750" height="250" fill="#F1BF00"/>
    </svg>
  );
}

export function FlagGB({ className = "w-4 h-3 rounded-sm overflow-hidden shrink-0 shadow-sm" }) {
  return (
    <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V30 M0,15 H60" stroke="#ffffff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export function FlagBR({ className = "w-4 h-3 rounded-sm overflow-hidden shrink-0 shadow-sm" }) {
  return (
    <svg className={className} viewBox="0 0 720 504" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="504" fill="#009B3A" />
      <polygon points="360,50.4 669.6,252 360,453.6 50.4,252" fill="#FEDF00" />
      <circle cx="360" cy="252" r="126" fill="#002776" />
      <path d="M 244 265 A 136 136 0 0 1 476 220" fill="none" stroke="#ffffff" strokeWidth="16" />
    </svg>
  );
}

export function FlagIcon({ lang, className = "w-4 h-3 rounded-sm overflow-hidden shrink-0 shadow-sm" }) {
  if (lang === "en") return <FlagGB className={className} />;
  if (lang === "pt") return <FlagBR className={className} />;
  return <FlagES className={className} />;
}
