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
      <h2 className="m-0 mb-2.5">Activities Due Today:</h2>
      <div className="bg-[var(--cl-1)] h-5/6 w-full rounded-[15px]">
        {dueTodayFromData.map((activityDue) => (
          <p key={activityDue.name} className="text-white">
            {activityDue.name}: {activityDue.goal - activityDue.completed}
          </p>
        ))}
      </div>
    </section>
  );
}
