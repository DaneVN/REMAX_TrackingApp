import React from "react";

const ActivityTable = ({ data }) => {
  // Generate dates for the current month
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="pb-4 rounded-[15px] overflow-auto max-h-full w-full">
      <table className="w-max min-w-full border-collapse">
        {/* Header Row with Dates */}
        <thead>
          <tr className="bg-[var(--cl-4)] text-[var(--cl-2)] text-[12px]">
            <th className="text-[1rem] p-2 border border-[var(--cl-2)] sticky top-0 bg-[var(--cl-4)]">
              Activity
            </th>
            {dates.map((date) => (
              <th
                key={date}
                className="text-[1rem] p-2 border border-[var(--cl-2)] sticky top-0 bg-[var(--cl-4)]"
              >
                {date}
              </th>
            ))}
          </tr>
        </thead>
        {/* Body Rows with Activities */}
        <tbody>
          {data.map((activity, index) => (
            <tr key={index} className="hover:bg-[var(--cl-5)]">
              <td className="text-[1rem] p-2 border border-[var(--cl-2)] font-bold">{`${activity.name}`}</td>
              {activity.array.map((goal, index) => (
                <td
                  key={`${activity.name}-${index}`}
                  className="text-[1rem] p-2 border border-[var(--cl-2)]"
                >
                  {goal}
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
