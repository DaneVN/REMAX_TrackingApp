import React from "react";

export default function StatsCard() {
  return (
    <section
      id="stats"
      className="bg-[var(--cl-1)] p-2.5 rounded-[15px] sm:col-span-2"
    >
      <div className="placeholder bg-[var(--cl-5)] h-[200px] w-full mb-2.5 rounded-[15px]"></div>
      <div className="buttons flex justify-between">
        <div className="button bg-[var(--cl-4)] h-12 w-[18%] rounded-[15px]"></div>
        <div className="button bg-[var(--cl-4)] h-12 w-[18%] rounded-[15px]"></div>
        <div className="button bg-[var(--cl-4)] h-12 w-[18%] rounded-[15px]"></div>
        <div className="button bg-[var(--cl-4)] h-12 w-[18%] rounded-[15px]"></div>
        <div className="button bg-[var(--cl-4)] h-12 w-[18%] rounded-[15px]"></div>
      </div>
    </section>
  );
}
