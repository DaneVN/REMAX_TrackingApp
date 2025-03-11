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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [updatedActivity, setUpdatedActivity] = React.useState({ ...activity });

  // Function to handle input changes for goalArray
  function handleGoalChange(dayIndex, value) {
    const newGoalArray = [...updatedActivity.goalArray];
    newGoalArray[dayIndex] = parseInt(value) || 0;
    setUpdatedActivity({ ...updatedActivity, goalArray: newGoalArray });
  }

  // Function to handle name change
  function handleNameChange(value) {
    setUpdatedActivity({ ...updatedActivity, name: value });
  }

  return (
    <div className="z-30 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-[var(--cl-4)] p-4 rounded-[15px] w-11/12 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[var(--cl-2)] text-[1.5rem] sm:text-[2rem]">
            Edit Activity
          </h3>
          <Button
            onClickFn={closeModal}
            className="text-[var(--cl-2)] text-[1.5rem] sm:text-[2rem]"
            caption="x"
          ></Button>
        </div>
        <label className="block mb-4">
          <span className="text-[var(--cl-2)]">Activity Name:</span>
          <input
            type="text"
            value={updatedActivity.name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="ml-2 p-1 rounded border border-[var(--cl-2)] bg-[var(--cl-1)] text-[var(--cl-2)] w-full sm:w-auto"
          />
        </label>
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
            className="bg-[var(--cl-2)] text-[var(--cl-1)] p-1.5 rounded"
            caption="Save Changes"
          ></Button>
          <Button
            onClickFn={onDeleteActivity}
            className="bg-[var(--cl-2)] text-[var(--cl-1)] p-1.5 rounded"
            caption="Delete Activity"
          ></Button>
          <Button
            onClickFn={onActivityInc}
            className="bg-[var(--cl-2)] text-[var(--cl-1)] p-1.5 rounded"
            caption="Capture"
          ></Button>
        </div>
      </div>
    </div>
  );
}
