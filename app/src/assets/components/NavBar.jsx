import React from "react";

export default function NavBar() {
  return (
    <nav
      className="min-h-[10vh] bg-[var(--cl-2)] flex justify-around px-1.25 pt-1.25 text-[var(--cl-4)] 
    border-b-2 border-[var(--cl-1)] sticky top-0 z-20 transition-top duration-300 
    ease-in-out"
    >
      <div className="h-6 w-6 self-center">
        <img src="/images/Gear.svg" alt="Settings" />
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
        href="#sheet"
        className="text-center active:bg-[var(--cl-6)] hover:bg-[var(--cl-3)] 
        rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 pt-3 px-1.5 
        no-underline font-bold text-xs"
      >
        Sheet
      </a>
      <a
        href="#graph"
        className="text-center active:bg-[var(--cl-6)] hover:bg-[var(--cl-3)]  
        rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 pt-3 px-2 
        no-underline font-bold text-xs"
      >
        Graph
      </a>
      <a
        href="#progress"
        className="text-center active:bg-[var(--cl-6)] hover:bg-[var(--cl-3)]  
        rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 pt-3 px-2 
        no-underline font-bold text-xs"
      >
        Progress
      </a>
    </nav>
  );
}
