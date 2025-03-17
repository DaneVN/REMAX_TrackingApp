/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Button from "./Button";

export default function ActivityModal({
  isOpen,
  activity,
  closeModal,
  onSaveChanges,
  onDeleteActivity,
  onActivityInc,
}) {
  if (!isOpen) return null;

  // Predefined activity options for a real estate context
  const activityOptions = [
    "Cold Call",
    "Client Call",
    "Pop-By",
    "Add to Database",
    "Networking Event",
    "Social Media Post",
    "Hand Written Notes",
    "Thank you cards",
    "CMA",
    "Listing",
    "Sale",
    "Custom", // Option for custom input
  ];

  // State for the activity, including dropdown selection and custom name
  const [updatedActivity, setUpdatedActivity] = React.useState({ ...activity });
  const [selectedOption, setSelectedOption] = React.useState(
    activityOptions.includes(activity.name) ? activity.name : "Custom"
  );
  const [customName, setCustomName] = React.useState(
    activityOptions.includes(activity.name) ? "" : activity.name
  );

  // Handle dropdown change
  function handleOptionChange(event) {
    const value = event.target.value;
    setSelectedOption(value);
    if (value !== "Custom") {
      setUpdatedActivity({ ...updatedActivity, name: value });
      setCustomName(""); // Clear custom name if predefined option is selected
    }
  }

  // Handle custom name input
  function handleCustomNameChange(event) {
    const value = event.target.value;
    setCustomName(value);
    setUpdatedActivity({ ...updatedActivity, name: value });
  }

  // Handle goal array changes
  function handleGoalChange(dayIndex, value) {
    const newGoalArray = [...updatedActivity.goalArray];
    newGoalArray[dayIndex] = parseInt(value) || 0;
    setUpdatedActivity({ ...updatedActivity, goalArray: newGoalArray });
  }

  return (
    <div className="z-30 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-[var(--cl-4)] p-4 rounded-[15px] w-11/12 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[var(--cl-2)] text-[1.5rem] sm:text-[2rem]">
            Edit Activity
          </h3>
          <Button onClickFn={closeModal} caption="x"></Button>
        </div>
        <div className="block mb-4">
          <span className="text-[var(--cl-2)]">Activity Name:</span>
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="ml-2 p-1 rounded border border-[var(--cl-2)] bg-[var(--cl-1)] text-[var(--cl-2)] w-full sm:w-auto"
          >
            {activityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {selectedOption === "Custom" && (
            <input
              type="text"
              value={customName}
              onChange={handleCustomNameChange}
              placeholder="Enter custom activity name"
              className="mt-2 ml-2 p-1 rounded border border-[var(--cl-2)] bg-[var(--cl-1)] text-[var(--cl-2)] w-full sm:w-auto"
            />
          )}
        </div>
        <div className="mb-4">
          <span className="text-[var(--cl-2)]">Daily Completed: </span>
          <span>{updatedActivity.dailyCompleted}</span>
        </div>
        <div className="overflow-auto max-h-[50vh] rounded-[15px]">
          <table className="w-max min-w-full border-collapse">
            <thead>
              <tr className="bg-[var(--cl-4)] text-[var(--cl-2)] text-[12px]">
                <th className="text-[1rem] p-2 border border-[var(--cl-2)] sticky top-0 bg-[var(--cl-4)]">
                  Day
                </th>
                {updatedActivity.goalArray.map((_, index) => (
                  <th
                    key={index}
                    className="text-[1rem] p-2 border border-[var(--cl-2)] sticky top-0 bg-[var(--cl-4)]"
                  >
                    {index + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="text-[var(--cl-2)] hover:bg-[var(--cl-5)] active:bg-[var(--cl-6)]">
                <td className="text-[1rem] p-2 border border-[var(--cl-2)] font-bold">
                  Goal
                </td>
                {updatedActivity.goalArray.map((goal, index) => (
                  <td
                    key={index}
                    className="text-[1rem] p-2 border border-[var(--cl-2)]"
                  >
                    <input
                      type="number"
                      value={goal}
                      min="0"
                      step="1"
                      onChange={(e) => handleGoalChange(index, e.target.value)}
                      className="w-16 p-1 rounded border border-[var(--cl-2)] bg-[var(--cl-1)] text-[var(--cl-2)]"
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-evenly mt-4">
          <Button
            onClickFn={() => onSaveChanges(updatedActivity)}
            caption="Save Changes"
          ></Button>
          <Button
            onClickFn={onDeleteActivity}
            caption="Delete Activity"
          ></Button>
          <Button onClickFn={onActivityInc} caption="Capture"></Button>
        </div>
      </div>
    </div>
  );
}
