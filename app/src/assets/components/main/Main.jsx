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
          name: "Social Media",
          goalArray: Array(31).fill(1),
          dailyCompleted: 0,
        },
        {
          name: "Validation",
          goalArray: Array(31).fill(1),
          dailyCompleted: 0,
        },
        {
          name: "Sale",
          goalArray: Array(31).fill(0),
          dailyCompleted: 0,
        },
      ],
      //needs to be two arrays for easier usage in the Graph element.
      prev: [[], []],
      progress: [
        //filler content DELETE LATER
        { name: "Cold Calls", complete: 20 },
        { name: "Social Media", complete: 10 },
      ],
    };
    localStorage.setItem("trackData", JSON.stringify(initialData));
  }

  const [isLoading, setIsLoading] = React.useState(true);
  const [state, setState] = React.useState(initialData);

  // Save state to local storage whenever it changes
  React.useEffect(() => {
    try {
      setIsLoading(true);
      const currentDate = new Date();
      const daysInMonth = new Date(
        currentDate.getUTCFullYear(),
        currentDate.getUTCMonth() + 1,
        0
      ).getDate();

      localStorage.setItem("trackData", JSON.stringify(state));
      // maybe make use of the dates to determine if the next month has been reached?
      // e.g) if the current dayOfMonth is less that the last login date, then the next month has been reached.
      /* localStorage.setItem("lastLogin", new Date().toISOString());*/

      if (currentDate.getDate() !== daysInMonth) {
        let tempData = {
          curr: [...state.curr],
          prev: [[], []],
          progress: [...state.progress],
        };

        state.progress.map((a) => {
          //Swap the temp prev data with the corresponding state progress data (or add new temp data)
          //and reset the state progress data to complete = 0
          try {
            tempData.prev[0].push(a.complete);
            tempData.prev[1].push(a.name);
          } catch (e) {
            console.error(e);
          }
          a.complete = 0;
        });
        localStorage.setItem("trackData", JSON.stringify(tempData));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [state]);

  // Function to update curr activities
  const updateCurr = (n) => {
    setState({ ...state, curr: n });
  };
  // Function to update curr activities
  const updateProgress = (n) => {
    setState({ ...state, progress: n });
  };
  if (!isLoading) {
    return (
      <main
        id="home"
        className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-1fr-1fr gap-5 p-5 pt-8 md:text-2xl"
      >
        <DueCard data={state.curr} />
        <div id="progress" className="mb-[5vh] sm:hidden"></div>
        <ProgressCard data={state.curr} />
        <div id="sheet" className="mb-[5vh]"></div>
        {console.log("state.progress main: ", state.progress)}
        <SheetCard
          progress={state.progress}
          data={state.curr}
          updateCurr={updateCurr}
          updateProgress={updateProgress}
        />
        <div id="graph" className="mb-[5vh]"></div>
        <GraphCard data={state} />
      </main>
    );
  } else {
    return <h1 className="p-10 justify-self-center">Loading Content...</h1>;
  }
}
