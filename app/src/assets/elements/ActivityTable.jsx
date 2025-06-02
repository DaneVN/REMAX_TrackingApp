import React from "react";

/**
 * ActivityTable Component
 * Displays a table of activities with their goals for each day of the current month.
 * @param {Object} props - The component props.
 * @param {Array} props.data - The activity data containing names and goal arrays.
 * @param {Function} props.openModalFn - Function to open the modal with activity details.
 * * @returns {JSX.Element} The rendered ActivityTable component.
 */

const ActivityTable = ({ data, openModalFn }) => {
  // Generate dates for the current month
  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const month = currentDate.getUTCMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="pb-4 rounded-[15px] overflow-x-auto max-h-full w-full">
      <table className="w-max min-w-full border-collapse">
        {/* Header Row with Dates */}
        <thead>
          <tr className="bg-[var(--cl-4)] text-[var(--cl-2)] text-[12px]">
            <th className="text-[1rem] p-2 border border-[var(--cl-2)] sticky left-0 top-0 bg-[var(--cl-4)] z-10 whitespace-normal break-words max-w-[150px]">
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
            <tr
              key={index}
              className="hover:bg-[var(--cl-5)] active:bg-[var(--cl-6)]"
              onClick={() => openModalFn(activity)}
            >
              <td className="text-[1rem] p-2 border border-[var(--cl-2)] font-bold sticky left-0 bg-[var(--cl-1)] z-10 whitespace-normal break-words max-w-[150px]">
                {activity.name}
              </td>
              {activity.goalArray.map((goal, index) => (
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
