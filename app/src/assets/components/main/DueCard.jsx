import React from "react";

export default function DueCard({ data }) {
  // const [isLoading, setIsLoading] = React.useState(true);

  const [dueTodayFromData, setDueTodayFromData] = React.useState([]);

  React.useEffect(() => {
    let tempData = [];
    data.forEach((activity) => {
      for (let i = 0; i < activity.goalArray.length; i++) {
        if (i == new Date().getDate() && activity.goalArray[i - 1] !== 0) {
          tempData.push({
            name: activity.name,
            goal: activity.goalArray[i - 1],
            completed: activity.dailyCompleted,
          });
        }
      }
    });
    setDueTodayFromData(tempData);
  }, [data]);

  return (
    <section
      className="h-[70vh] sm:h-[50vh] bg-[var(--cl-3)] p-2.5 text-white rounded-[15px]
    sm:sticky top-16 sm:z-9 transition-top duration-300 ease-in-out"
    >
      <h2 className="mx-2 my-4 font-extrabold">Activities Due Today:</h2>
      <div className="p-3 bg-[var(--cl-1)] h-5/6 w-full rounded-[15px]">
        {dueTodayFromData.map((activityDue) => (
          <p key={activityDue.name} className="text-white">
            <span className="italic">{activityDue.name}</span> left for today:{" "}
            {activityDue.goal - activityDue.completed > 0
              ? activityDue.goal - activityDue.completed
              : Math.abs(activityDue.goal - activityDue.completed) +
                " over goal <3"}
          </p>
        ))}
      </div>
    </section>
  );
}
