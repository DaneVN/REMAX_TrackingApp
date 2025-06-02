import React from "react";

/* example of data received in prop:
{
  purchasePrice: "100000",
  comissionOnPurchasePrice: "5%",
  agentSplit: "50%",
  vatOnAgentSplit: "incl",
  grossCommision: "5000",
  vat: "750",
  royalty: "250",
  unitySplit: "2000",
  paye: "300"
}
*/

/* * CalculatorResult Component
 * Displays the results of the calculator in a formatted list.
 * @param {Object} calculatorData - The data to display, containing various calculated values.
 */
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
