import React from "react";
import ActivityTable from "../../elements/ActivityTable";

export default function SheetCard() {
  return (
    <section
      id="sheet"
      className="bg-[var(--cl-1)] p-2.5 rounded-[15px] sm:col-start-2 sm:col-span-2 h-fit"
    >
      <div className="bg-[var(--cl-2)] h-fit max-w-full m-1 rounded-[5px] mb-4">
        <ActivityTable />
      </div>
      <div className="flex justify-evenly">
        <button
          className="active:bg-[var(--cl-6)] hover:font-bold  hover:bg-[var(--cl-3)]  
        rounded-3xl bg-[var(--cl-5)] text-[var(--cl-2)] py-2 px-7 text-xs"
        >
          Increment
        </button>
        <button
          className="active:bg-[var(--cl-6)] hover:font-bold  hover:bg-[var(--cl-3)]  
        rounded-3xl bg-[var(--cl-5)] text-[var(--cl-2)] py-2 px-7 text-xs"
        >
          Edit Activity
        </button>
      </div>
    </section>
  );
}
