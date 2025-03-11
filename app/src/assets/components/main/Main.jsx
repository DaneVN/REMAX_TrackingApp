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
          name: "New Activity",
          goalArray: Array(31).fill(0),
          dailyCompleted: 0,
        },
      ],
      prev: [
        //Filler Info
        [15, 20, 40],
        ["Thanks cards", "Social Media posts", "Cold Calls"],
      ],
    };
    localStorage.setItem("trackData", JSON.stringify(initialData));
  }

  const [state, setState] = React.useState(initialData);

  // Save state to local storage whenever it changes
  React.useEffect(() => {
    localStorage.setItem("trackData", JSON.stringify(state));
  }, [state]);

  // Function to update curr activities
  const updateCurr = (newCurr) => {
    setState({ ...state, curr: newCurr });
  };

  return (
    <main
      id="home"
      className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-1fr-1fr gap-5 p-5 pt-8 md:text-2xl"
    >
      <DueCard data={state.curr} />
      <div id="progress" className="mb-[5vh] sm:hidden"></div>
      <ProgressCard data={state.curr} />
      <div id="sheet" className="mb-[5vh]"></div>
      <SheetCard data={state.curr} updateData={updateCurr} />
      <div id="graph" className="mb-[5vh]"></div>
      <GraphCard data={state} />
    </main>
  );
}
