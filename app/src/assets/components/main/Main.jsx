import React from "react";
import DueCard from "./DueCard";
import ProgressCard from "./ProgressCard";
import SheetCard from "./SheetCard";
import GraphCard from "./GraphCard";

export default function Main() {
  // Initialize state from local storage or default data
  let initialData;
  if (localStorage.getItem("trackData")) {
    initialData = JSON.parse(localStorage.getItem("trackData"));
  } else {
    initialData = {
      curr: [
        {
          name: "Add Activity and fill the dates with goals",
          goalArray: Array(31).fill(1),
          dailyCompleted: 0,
        },
      ],
      prev: [],
    };
    localStorage.setItem("trackData", JSON.stringify(initialData));
  }

  const [state] = React.useState(initialData);

  // Save state to local storage whenever it changes
  React.useEffect(() => {
    localStorage.setItem("trackData", JSON.stringify(state));
  }, [state]);
  React.useEffect(() => {
    localStorage.setItem("trackData", JSON.stringify(state));
  }, [state]);

  return (
    <main
      id="home"
      className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-1fr-1fr gap-5 p-5 pt-8 md:text-2xl"
    >
      <DueCard data={state.curr} /*setData={setinitialData} */ />
      <div id="progress" className="mb-[5vh] sm:hidden"></div>
      <ProgressCard data={state.curr} /*setData={setinitialData} */ />
      <div id="sheet" className="mb-[5vh]"></div>
      <SheetCard data={state.curr} /*setData={setinitialData} */ />
      <div id="graph" className="mb-[5vh]"></div>
      <GraphCard data={state} /*setData={setinitialData} */ />
    </main>
  );
}
