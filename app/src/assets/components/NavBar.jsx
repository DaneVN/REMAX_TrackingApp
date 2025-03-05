import React from "react";

export default function NavBar() {
  return (
    <nav
      className="bg-[var(--cl-2)] flex justify-around p-1.25 text-[var(--cl-4)] 
    border-y-2 border-[var(--cl-1)] sticky top-0 z-20 transition-top duration-300 
    ease-in-out"
    >
      <div className="px-1.25">
        <p>0</p>
      </div>
      <a href="#home" className="px-2.5 text-[var(--cl-4)] no-underline">
        Home
      </a>
      <a href="#stats" className="px-2.5 text-[var(--cl-4)] no-underline">
        Stats
      </a>
      <a href="#sheet" className="px-2.5 text-[var(--cl-4)] no-underline">
        Activity Sheet
      </a>
    </nav>
  );
}
