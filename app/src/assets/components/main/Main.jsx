import React from "react";
import DueCard from "./DueCard";
import StatsCard from "./StatsCard";
import SheetCard from "./SheetCard";

export default function Main() {
  return (
    <main
      className="flex flex-col sm:grid sm:grid-cols-3 
    sm:grid-rows-1fr-1fr gap-5 p-5 pt-8 md:text-2xl"
    >
      <DueCard />
      <StatsCard />
      <SheetCard />
      <SheetCard />
      <SheetCard />
    </main>
  );
}
