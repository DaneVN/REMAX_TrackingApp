import React from "react";

/**
 * ActivityTable Component
 * Displays a table of activities with their goals for each day of the current month.
 * @param {Object} props - The component props.
 * @param {Array} props.data - The activity data containing names and goal arrays.
 * @param {Function} props.openModalFn - Function to open the modal with activity details.
 * * @returns {JSX.Element} The rendered ActivityTable component.
 */

export default function ProgressCard({ activity, goal, complete }) {
  const progressPercent = (complete / goal) * 100;
  if (goal !== 0) {
    return (
      <div className="w-[40%] -rounded-[15px] flex flex-col justify-center items-center p-0">
        <h4 className="justify-self-center self-center text-[var(--cl-2)]">
          {activity}
        </h4>

        <div
          className="rounded-full w-full h-full flex justify-center items-center"
          style={{
            width: "40vw",
            height: "40vw",
            backgroundImage: `conic-gradient(var(--cl-5) ${progressPercent}%, var(--cl-3) ${progressPercent}% 100%)`,
          }}
        ></div>

        <div className="relative mt-2">
          <p className="text-center text-[var(--cl-2)]">
            <span className="font-bold text-[2.5rem]"> {complete} </span>/{goal}
          </p>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
