import React from "react";
import DueCard from "./DueCard";
import ProgressCard from "./ProgressCard";
import SheetCard from "./SheetCard";
import GraphCard from "./GraphCard";

export default function Main() {
  return (
    <main
      id="home"
      className="flex flex-col sm:grid sm:grid-cols-3 
    sm:grid-rows-1fr-1fr gap-5 p-5 pt-8 md:text-2xl"
    >
      <DueCard />
      <div id="sheet" className="mb-[5vh] sm:hidden"></div>
      <SheetCard />
      <div id="graph" className="mb-[5vh]"></div>
      <GraphCard />
      <div id="progress" className="mb-[5vh]"></div>
      <ProgressCard />
    </main>
  );
}
