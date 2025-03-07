import React from "react";

const ActivityTable = () => {
  /* Sample DELETE LATER */
  const activities = [
    { name: "Cold Calls", goal: "5" },
    { name: "Thank You Card", goal: "3" },
    // Add more activities as needed
  ];

  // Generate dates for the current month
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="py-4 rounded-[15px] overflow-auto max-h-[60vh] w-full">
      <table className="w-max min-w-full border-collapse">
        {/* Header Row with Dates */}
        <thead>
          <tr className="bg-[var(--cl-4)] text-[var(--cl-2)] text-[12px]">
            <th className="text-[12px] p-2 border border-[var(--cl-2)] sticky top-0 bg-[var(--cl-4)]">
              Activity
            </th>
            {dates.map((date) => (
              <th
                key={date}
                className="text-[12px] p-2 border border-[var(--cl-2)] sticky top-0 bg-[var(--cl-4)]"
              >
                {date}
              </th>
            ))}
          </tr>
        </thead>
        {/* Body Rows with Activities */}
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index} className="hover:bg-[var(--cl-5)]">
              <td className="text-[12px] p-2 border border-[var(--cl-2)] font-bold">{`${activity.name}`}</td>
              {dates.map((date) => (
                <td
                  key={`${activity.name}-${date}`}
                  className="text-[12px] p-2 border border-[var(--cl-2)]"
                >
                  {/* Placeholder for data (e.g., completed count) */}0
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
