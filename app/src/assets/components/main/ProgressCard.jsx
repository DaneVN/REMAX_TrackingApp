import React from "react";
import Progress from "../../elements/Progress";

export default function ProgressCard({ data }) {
  let currWeek = new Date();

  function getStartOfWeek(date) {
    let startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - (date.getDay() - 1));
    return startOfWeek;
  }

  function calculateWeeklyGoal(activity) {
    let startOfWeek = getStartOfWeek(currWeek);
    let endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    let currentMonthStart = new Date(
      currWeek.getFullYear(),
      currWeek.getMonth(),
      1
    );
    let currentMonthEnd = new Date(
      currWeek.getFullYear(),
      currWeek.getMonth() + 1,
      0
    );

    let sum = 0;
    for (
      let d = new Date(startOfWeek);
      d <= endOfWeek;
      d.setDate(d.getDate() + 1)
    ) {
      if (d >= currentMonthStart && d <= currentMonthEnd) {
        let dayOfMonth = d.getDate();
        sum += activity.goalArray[dayOfMonth - 1];
      }
    }
    return sum;
  }

  return (
    <section
      id="progress"
      className="min-h-[90vh] bg-[var(--cl-1)] p-2.5 rounded-[15px] sm:col-start-2 sm:col-span-2"
    >
      <h2 className="justify-self-center underline font-bold text-3xl text-[var(--cl-2)] my-5">
        Progress:
      </h2>
      <div className="flex flex-wrap py-3 gap-3 justify-evenly">
        {data.map((activity) => {
          let weeklyGoal = calculateWeeklyGoal(activity);
          return (
            <Progress
              activity={activity.name}
              goal={weeklyGoal}
              complete={activity.dailyCompleted}
              key={activity.name}
            />
          );
        })}
      </div>
    </section>
  );
}
