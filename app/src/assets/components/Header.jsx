import React from "react";

export default function Header() {
  return (
    <header
      id="home"
      className="flex justify-between items-start p-2.5 text-white 
      relative z-10 bg-cover bg-[url('./src/assets/images/REMAXBanner.jpg')] 
      bg-[position:18%_20%]"
    >
      <span className="text-2xl font-bold text-[var(--cl-5)]">
        Tracking App
      </span>
      <img
        src="../src/assets/images/REMAXUnity.png"
        alt="RE/MAX Unity Logo"
        className="max-h-[20vh] object-contain max-w-2/3"
      />
    </header>
  );
}
