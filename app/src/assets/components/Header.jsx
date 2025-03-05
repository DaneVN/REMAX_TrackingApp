import React from "react";

export default function Header() {
  return (
    <header
      id="home"
      className="flex justify-between items-center p-2.5 text-white 
      relative z-10 bg-auto bg-[url('./src/assets/images/REMAXBanner.jpg')] 
      bg-[50%]"
    >
      <img
        src="../src/assets/images/REMAXUnity.png"
        alt="RE/MAX Unity Logo"
        className="max-h-[20vh] object-contain max-w-2/3"
      />
      <span className="text-2xl font-bold text-[var(--cl-5)]">
        Tracking App
      </span>
    </header>
  );
}
