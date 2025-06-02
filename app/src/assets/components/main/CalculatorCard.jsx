import { useState } from "react";
import CalculatorResult from "./CalculatorResult";

export default function CalculatorCard() {
  const [calculatorData, setCalculatorData] = useState({
    purchasePrice: 0,
    comissionOnPurchasePrice: 0,
    agentSplit: 0,
    vatOnAgentSplit: false,
    grossCommision: 0,
    vat: 0,
    royalty: 0,
    unitySplit: 0,
    paye: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      purchasePrice: new FormData(event.target).get("purchasePrice"),
      comissionOnPurchasePrice: new FormData(event.target).get(
        "comissionOnPurchasePrice"
      ),
      agentSplit: new FormData(event.target).get("agentSplit"),
      vatOnAgentSplit:
        new FormData(event.target).get("vatOnAgentSplit") == "on"
          ? "incl"
          : "excl", //true = "on" false = null
      grossCommision: new FormData(event.target).get("grossCommision"),
      vat: new FormData(event.target).get("vat"),
      royalty: new FormData(event.target).get("royalty"),
      unitySplit: new FormData(event.target).get("unitySplit"),
      paye: new FormData(event.target).get("paye"),
    };

    setCalculatorData(formData);
    console.log("Calculated Data:", formData);
  };

  return (
    <section
      id="calculator"
      className="min-h-[90vh] bg-[var(--cl-1)] p-2.5 rounded-[15px] sm:col-start-2 sm:col-span-2 text-[var(--cl-2)]"
    >
      <div>
        <h2 className="justify-self-center underline font-bold text-3xl my-5">
          Calculator:
        </h2>
        <div className="flex flex-col items-center justify-center h-full">
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="w-full max-w-2xl"
          >
            <div className="flex flex-col items-start justify-center gap-4">
              <label className="text-lg font-semibold">
                Purchase Price:
                <input
                  name="purchasePrice"
                  type="number"
                  className="mt-2 p-2 rounded border border-gray-300 w-11/12"
                  placeholder="..."
                  min={0}
                />
              </label>
              <label className="text-lg font-semibold">
                Commision on Purchase Price:
                <input
                  name="comissionOnPurchasePrice"
                  className="mt-2 p-2 rounded border border-gray-300 w-11/12"
                  placeholder="..."
                  min={0}
                />{" "}
                %
              </label>
              <label className="text-lg font-semibold">
                Agent Split:{" "}
                <input
                  name="agentSplit"
                  className="mt-2 p-2 rounded border border-gray-300 w-11/12"
                  placeholder="..."
                  min={0}
                />{" "}
                %
              </label>
              <label className="text-lg font-semibold flex gap-2">
                VAT on Agent Split:
                <input name="vatOnAgentSplit" type="checkbox" />
              </label>

              <label className="text-lg font-semibold">
                Gross Commision:{" "}
                <input
                  name="grossCommision"
                  type="number"
                  className="mt-2 p-2 rounded border border-gray-300 w-11/12"
                  placeholder="..."
                  min={0}
                />
              </label>
              <hr />

              <label className="text-lg font-semibold">
                VAT:{" "}
                <input
                  name="vat"
                  className="mt-2 p-2 rounded border border-gray-300 w-11/12"
                  placeholder="..."
                  min={0}
                />{" "}
                %
              </label>

              <label className="text-lg font-semibold">
                Royalty:{" "}
                <select
                  name="royalty"
                  className="mt-2 p-2 rounded border border-gray-300 block"
                >
                  <option value={1.5}>1.5%</option>
                  <option value={5}>5.0%</option>
                </select>
              </label>

              <label className="text-lg font-semibold">
                Unity Split on Gross Commision:{" "}
                <select
                  name="unitySplit"
                  className="mt-2 p-2 rounded border border-gray-300"
                >
                  <option value={90}>90|10</option>
                  <option value={60}>60|40</option>
                  <option value={50}>50|50</option>
                </select>
              </label>

              <label className="text-lg font-semibold">
                PAYE:{" "}
                <input
                  name="paye"
                  className="mt-2 p-2 rounded border border-gray-300 w-11/12"
                  placeholder="..."
                  min={0}
                />{" "}
                %
              </label>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded active:bg-blue-600 transition-colors"
              >
                Calculate
              </button>
            </div>
          </form>
        </div>{" "}
      </div>
      <div>
        <CalculatorResult calculatorData={calculatorData} />
      </div>
    </section>
  );
}
