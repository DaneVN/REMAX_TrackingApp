import React from "react";
import DueCard from "./DueCard";
import ProgressCard from "./ProgressCard";
import SheetCard from "./SheetCard";
import GraphCard from "./GraphCard";

export default function Main() {
  let initialData;
  if (localStorage.getItem("trackData")) {
    initialData = JSON.parse(localStorage.getItem("trackData"));
  } else {
    initialData = {
      curr: [],
      prev: [[], []],
      progress: [],
    };
    localStorage.setItem("trackData", JSON.stringify(initialData));
  }

  const [isLoading, setIsLoading] = React.useState(true);
  const [state, setState] = React.useState(initialData);
  const hasCheckedMonth = React.useRef(false); // Track if month check has run out

  // Function to check and handle month change
  const checkMonthChange = () => {
    const now = new Date();
    const lastLogin = localStorage.getItem("lastLogin")
      ? new Date(localStorage.getItem("lastLogin"))
      : null;
    const currentMonth = now.getMonth();
    const lastMonth = lastLogin ? lastLogin.getMonth() : currentMonth;

    if (lastLogin && currentMonth !== lastMonth && !hasCheckedMonth.current) {
      // New month detected
      const newState = {
        ...state,
        prev: [
          state.progress.map((p) => p.complete),
          state.progress.map((p) => p.name),
        ],
        progress: state.curr.map((activity) => ({
          name: activity.name,
          complete: 0,
        })),
      };
      setState(newState);
      localStorage.setItem("trackData", JSON.stringify(newState));
      localStorage.setItem("lastLogin", now.toISOString());
      hasCheckedMonth.current = true; // Prevent re-running
    } else {
      localStorage.setItem("lastLogin", now.toISOString()); // Update lastLogin if no month change
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    checkMonthChange();
    setIsLoading(false);
  }, []); // Empty dependency array = runs once on mount

  // Save state to localStorage on change, but not month check
  React.useEffect(() => {
    if (hasCheckedMonth.current) {
      // Only save after initial mount to avoid overwriting month reset
      localStorage.setItem("trackData", JSON.stringify(state));
    }
  }, [state]);

  const updateCurr = (n) =>
    setState((prevState) => {
      let newState = { ...prevState, curr: n };
      localStorage.setItem("trackData", JSON.stringify(newState));
      return newState;
    });
  const updateProgress = (n) =>
    setState((prevState) => {
      let newState = { ...prevState, progress: n };
      localStorage.setItem("trackData", JSON.stringify(newState));
      return newState;
    });

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
