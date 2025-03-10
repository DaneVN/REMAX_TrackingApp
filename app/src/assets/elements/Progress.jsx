import React from "react";

export default function ProgressCard({ activity, goal, complete }) {
  const progressPercent = (complete / goal) * 100;

  return (
    <div className="h-[60vw] w-[40vw] rounded-[15px] flex flex-col justify-center items-center p-0">
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
}
