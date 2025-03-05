import React from "react";

export default function NavBar() {
  return (
    <nav
      className="bg-[var(--cl-2)] flex justify-around px-1.25 pt-1.25 text-[var(--cl-4)] 
    border-y-2 border-[var(--cl-1)] sticky top-0 z-20 transition-top duration-300 
    ease-in-out"
    >
      <div className="px-1.25 bg-[var(--cl-6)] rounded-full w-12 h-12">
        {/* profile picture */}
      </div>
      <a
        href="#home"
        className="text-center active:bg-[var(--cl-6)] hover:bg-[var(--cl-3)] 
        rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 pt-3 px-2 
        no-underline font-bold text-xs"
      >
        Home
      </a>
      <a
        href="#stats"
        className="text-center active:bg-[var(--cl-6)] hover:bg-[var(--cl-3)]  
        rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 pt-3 px-2 
        no-underline font-bold text-xs"
      >
        Stats
      </a>
      <a
        href="#sheet"
        className="text-center active:bg-[var(--cl-6)] hover:bg-[var(--cl-3)] 
        rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 pt-3 px-1.5 
        no-underline font-bold text-xs"
      >
        Activity Sheet
      </a>
    </nav>
  );
}
