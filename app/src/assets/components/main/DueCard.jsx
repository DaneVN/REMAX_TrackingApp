import React from "react";

export default function DueCard() {
  return (
    <section id="due" className="bg-[var(--cl-3)] p-2.5 text-white rounded">
      <h2 className="m-0 mb-2.5">Actions Due Today:</h2>
      <div className="placeholder bg-[var(--cl-1)] h-[300px] w-full rounded"></div>
    </section>
  );
}
