import React from "react";

export default function CalculatorCard() {
  return (
    <section
      id="calculator"
      className="min-h-[90vh] bg-[var(--cl-1)] p-2.5 rounded-[15px] sm:col-start-2 sm:col-span-2 text-[var(--cl-2)]"
    >
      <h2 className="justify-self-center underline font-bold text-3xl my-5">
        Calculator:
      </h2>
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-lg mb-4">This feature is under development.</p>
        <p className="text-sm">Please check back later for updates.</p>
      </div>
    </section>
  );
}
