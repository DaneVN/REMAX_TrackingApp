import React from "react";
import Progress from "../../elements/Progress";

export default function ProgressCard() {
  return (
    <section className="min-h-[90vh] bg-[var(--cl-1)] p-2.5 rounded-[15px] sm:col-start-2 sm:col-span-2">
      <div className="flex flex-wrap py-3 gap-3 justify-evenly">
        {/* 
            Add the display data as props
            loop through the array of activities and call a progress card for every
            activity and goal set per week
        */}
        <Progress activity="Cold calls" goal="12" complete="10" />
        <Progress activity="Thank you card" goal="7" complete="5" />
      </div>
    </section>
  );
}
