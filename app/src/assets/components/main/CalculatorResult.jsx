import React from "react";

export default function CalculatorResult({ calculatorData }) {
  return (
    <div className="w-full max-w-2xl bg-[var(--cl-4)] text-[var(--cl-2)] my-4 p-4 rounded shadow-md">
      <h3 className="text-2xl font-bold mb-4">Calculation Results</h3>
      <ul className="space-y-2">
        {Object.entries(calculatorData).map(([key, value]) => (
          <li
            key={key}
            className="flex justify-between border-b border-b-white w-full"
          >
            <span className="font-semibold capitalize">
              {key.replace(/([A-Z])/g, " $1").toLowerCase()}:
            </span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
