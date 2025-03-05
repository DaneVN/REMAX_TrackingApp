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
        className="text-center hover:bg-[var(--cl-6)] rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 py-1 px-2.5 no-underline"
      >
        Home
      </a>
      <a
        href="#stats"
        className="text-center hover:bg-[var(--cl-6)] rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 py-1 px-2.5 no-underline"
      >
        Stats
      </a>
      <a
        href="#sheet"
        className="text-center hover:bg-[var(--cl-6)] rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 py-1 px-2.5 no-underline"
      >
        Activity Sheet
      </a>
    </nav>
  );
}
