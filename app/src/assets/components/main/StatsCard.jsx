import React from "react";

export default function StatsCard() {
  return (
    <section
      id="stats"
      className="bg-[var(--cl-1)] p-2.5 rounded-[15px] sm:col-start-2 sm:col-span-2"
    >
      <div className="flex justify-between">
        <div className="bg-[var(--cl-4)] h-12 w-[18%] rounded-[15px]"></div>
        <div className="bg-[var(--cl-4)] h-12 w-[18%] rounded-[15px]"></div>
        <div className="bg-[var(--cl-4)] h-12 w-[18%] rounded-[15px]"></div>
        <div className="bg-[var(--cl-4)] h-12 w-[18%] rounded-[15px]"></div>
        <div className="bg-[var(--cl-4)] h-12 w-[18%] rounded-[15px]"></div>
      </div>
    </section>
  );
}
