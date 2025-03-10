import React from "react";
import DueCard from "./DueCard";
import ProgressCard from "./ProgressCard";
import SheetCard from "./SheetCard";
import GraphCard from "./GraphCard";

export default function Main() {
  /*
  const [state, setState] = React.useState(() =>
    JSON.parse(localStorage.getItem("trackData"))
  );*/

  /*Example Data structure*/
  // eslint-disable-next-line no-unused-vars
  let state = {
    curr: [
      // Set goals
      {
        name: "Cold Calls",
        array: [
          5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          5, 5, 5, 5, 5, 5, 5, 5,
        ],
      },
      {
        name: "Thank you cards",
        array: [
          5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          5, 5, 5, 5, 5, 5, 5, 5,
        ],
      },
    ],
    prev: [
      //Prev Stats
      {
        //tba
      },
    ],
  };

  return (
    <main
      id="home"
      className="flex flex-col sm:grid sm:grid-cols-3 
    sm:grid-rows-1fr-1fr gap-5 p-5 pt-8 md:text-2xl"
    >
      <DueCard data={state.curr} /*setData={setState} */ />
      <div id="sheet" className="mb-[5vh] sm:hidden"></div>
      <SheetCard data={state.curr} /*setData={setState} */ />
      <div id="graph" className="mb-[5vh]"></div>
      <GraphCard data={state} /*setData={setState} */ />
      <div id="progress" className="mb-[5vh]"></div>
      <ProgressCard data={state.curr} /*setData={setState} */ />
    </main>
  );
}
