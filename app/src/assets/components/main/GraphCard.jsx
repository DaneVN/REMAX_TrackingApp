import React from "react";
import Graph from "../../elements/Graph.jsx";

/**
 * GraphCard Component
 * Displays a graph based on the provided data.
 * @param {Object} props - The component props.
 * @param {Object} props.data - The data to be visualized in the graph.
 * @returns {JSX.Element} The rendered GraphCard component.
 */

export default function GraphCard({ data }) {
  return (
    <section className="h-[90vh] bg-[var(--cl-1)] p-2.5 rounded-[15px] sm:col-start-2 sm:col-span-2">
      <div className="h-full w-full mb-2.5 rounded-[15px] pl-5 flex flex-col gap-10 justify-start items-center overflow-scroll">
        <Graph data={data} /> {/*current data */}
      </div>
    </section>
  );
}
