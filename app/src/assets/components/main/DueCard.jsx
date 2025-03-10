import React from "react";

export default function DueCard() {
  return (
    <section
      className="h-[70vh] sm:h-[50vh] bg-[var(--cl-3)] p-2.5 text-white rounded-[15px]
    sm:sticky top-16 sm:z-9 transition-top duration-300 ease-in-out"
    >
      <h2 className="m-0 mb-2.5">Activities Due Today:</h2>
      <div className="bg-[var(--cl-1)] h-5/6 w-full rounded-[15px]"></div>
    </section>
  );
}
