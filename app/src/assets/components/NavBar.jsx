import React from "react";

/* React component for displaying calculator results
 * @param {Object} data - The data containing activities and their goals.
 * @returns {JSX.Element} The rendered NavBar component.
 * */

export default function NavBar() {
  const resetData = () => {
    let isReset = window.confirm("Are you sure you want to reset ALL data?");
    if (isReset) {
      let initialData = {
        curr: [],
        prev: [[], []],
        progress: [],
      };
      localStorage.setItem("trackData", JSON.stringify(initialData));
    } else return;
  };

  return (
    <nav
      className="min-h-[10vh] bg-[var(--cl-2)] flex justify-around px-1.25 pt-1.25 text-[var(--cl-4)] 
    border-b-2 border-[var(--cl-1)] sticky top-0 z-20 transition-top duration-300 
    ease-in-out"
    >
      <div className="h-6 w-6 self-center">
        <button onClick={resetData}>
          <img src="images/Trash.svg" alt="Settings" />
        </button>
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
        href="#calculator"
        className="text-center active:bg-[var(--cl-6)] hover:bg-[var(--cl-3)] 
        rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 pt-3 px-2 
        no-underline font-bold text-xs"
      >
        Comm.
      </a>
      <a
        href="#progress"
        className="text-center active:bg-[var(--cl-6)] hover:bg-[var(--cl-3)]  
        rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 pt-3 px-2 
        no-underline font-bold text-xs"
      >
        Progress
      </a>
      <a
        href="#sheet"
        className="text-center active:bg-[var(--cl-6)] hover:bg-[var(--cl-3)] 
        rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 pt-3 px-1.5 
        no-underline font-bold text-xs"
      >
        Tasks
      </a>
      <a
        href="#graph"
        className="text-center active:bg-[var(--cl-6)] hover:bg-[var(--cl-3)]  
        rounded-t-3xl bg-[var(--cl-5)] text-[var(--cl-2)] w-1/6 pt-3 px-2 
        no-underline font-bold text-xs"
      >
        Graph
      </a>
    </nav>
  );
}
