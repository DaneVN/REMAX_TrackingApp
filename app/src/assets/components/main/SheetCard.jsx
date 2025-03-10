import React from "react";
import ActivityTable from "../../elements/ActivityTable";
import Button from "../../elements/Button";

export default function SheetCard({ data }) {
  return (
    <section className="h-[90vh] bg-[var(--cl-1)] p-2.5 rounded-[15px] sm:col-start-2 sm:col-span-2">
      <div className="bg-[var(--cl-2)] h-5/6 max-w-full m-1 rounded-[15px] mb-4">
        <ActivityTable data={data} />
      </div>
      <div className="flex justify-evenly">
        <Button caption="Capture"></Button>
        <Button caption="Add Activity"></Button>
        <Button caption="Edit Activity"></Button>
      </div>
    </section>
  );
}
