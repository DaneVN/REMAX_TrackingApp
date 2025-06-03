import { useState, useRef } from "react";
import CalculatorResult from "./CalculatorResult";

/* * CalculatorCard Component
 * A form-based calculator for real estate agents to compute various financial metrics.
 * @returns {JSX.Element} The rendered calculator card component.
 */

export default function CalculatorCard() {
  const grossRef = useRef();

  const [calculatorData, setCalculatorData] = useState({
    purchasePrice: 0,
    commissionOnPurchasePrice: 0,
    agentSplit: 0,
    vatOnAgentSplit: "excl.",
    grossCommision: 0,
    vat: 0,
    royalty: 0,
    unitySplit: 0,
    paye: 0,
  });
  const [hasFixedGrossAmount, setHasFixedGrossAmount] = useState(
    grossRef.checked
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = hasFixedGrossAmount
      ? {
          purchasePrice: new FormData(event.target).get("purchasePrice"),
          grossCommision: new FormData(event.target).get("grossCommision"),
          royalty: new FormData(event.target).get("royalty"),
          unitySplit: new FormData(event.target).get("unitySplit"),
          paye: new FormData(event.target).get("paye"),
        }
      : {
          purchasePrice: new FormData(event.target).get("purchasePrice"),
          commissionOnPurchasePrice: new FormData(event.target).get(
            "comissionOnPurchasePrice"
          ),
          agentSplit: new FormData(event.target).get("agentSplit"),
          // vatOnAgentSplit:
          //   new FormData(event.target).get("vatOnAgentSplit") == "on"
          //     ? "incl."
          //     : "excl.", //true = "on" false = null
          royalty: new FormData(event.target).get("royalty"),
          unitySplit: new FormData(event.target).get("unitySplit"),
          paye: new FormData(event.target).get("paye"),
        };

    setCalculatorData(formData);
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
                  required
                  name="purchasePrice"
                  type="number"
                  className="mt-2 p-2 rounded border border-gray-300 w-11/12"
                  placeholder="..."
                  min={0}
                />
              </label>
              <label className="text-lg font-semibold">
                Has Fixed Gross Amount:
                <input
                  name="hasFixedGrossAmount"
                  ref={grossRef}
                  type="checkbox"
                  className="ml-2"
                  onChange={() => setHasFixedGrossAmount(!hasFixedGrossAmount)}
                />
              </label>
              <div
                className={`flex flex-col items-start justify-center gap-4 ${
                  hasFixedGrossAmount ? "hidden" : ""
                }`}
              >
                <label className="text-lg font-semibold">
                  Full % Commision on Purchase Price:
                  <input
                    name="comissionOnPurchasePrice"
                    className="mt-2 p-2 rounded border border-gray-300 w-11/12"
                    placeholder="..."
                    min={0}
                  />{" "}
                  %
                </label>
                <label className="text-lg font-semibold">
                  % Commission Split with Other Agent:{" "}
                  <input
                    name="agentSplit"
                    className="mt-2 p-2 rounded border border-gray-300 w-11/12"
                    placeholder="..."
                    min={0}
                  />{" "}
                  %
                </label>
              </div>

              <label
                className={`text-lg font-semibold + ${
                  hasFixedGrossAmount ? "" : "hidden"
                }`}
              >
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
                Royalty:{" "}
                <select
                  name="royalty"
                  className="mt-2 p-2 rounded border border-gray-300 block"
                >
                  <option value={1.5} className="text-black">
                    1.5%
                  </option>
                  <option value={5} className="text-black">
                    5.0%
                  </option>
                </select>
              </label>

              <label className="text-lg font-semibold">
                Unity Office Split:{" "}
                <select
                  name="unitySplit"
                  className="mt-2 p-2 rounded border border-gray-300"
                >
                  <option value={90} className="text-black">
                    90|10
                  </option>
                  <option value={70} className="text-black">
                    70|30
                  </option>
                  <option value={50} className="text-black">
                    50|50
                  </option>
                </select>
              </label>

              <label className="text-lg font-semibold">
                PAYE:{" "}
                <input
                  required
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
