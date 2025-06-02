import React from "react";
import ActivityTable from "../../elements/ActivityTable";
import ActivityModal from "../../elements/ActivityModal";
import Button from "../../elements/Button";

/**
 * SheetCard Component
 * Displays a card with activities, allowing users to add, edit, and track their progress.
 * @param {Object} props - The component props.
 * @param {Array} props.progress - The progress data for activities.
 * @param {Array} props.data - The current activities data.
 * @param {Function} props.updateCurr - Function to update the current activities.
 * @param {Function} props.updateProgress - Function to update the progress data.
 * * @returns {JSX.Element} The rendered SheetCard component.
 * */

export default function SheetCard({
  progress,
  data,
  updateCurr,
  updateProgress,
}) {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedActivity, setSelectedActivity] = React.useState(null);

  // Reset dailyCompleted at midnight
  React.useEffect(() => {
    const now = new Date();
    const lastReset = localStorage.getItem("lastReset")
      ? new Date(localStorage.getItem("lastReset"))
      : null;

    if (!lastReset || now.getTime() - lastReset.getTime() >= 86400000) {
      const updatedCurr = data.map((activity) => ({
        ...activity,
        dailyCompleted: 0,
      }));
      updateCurr(updatedCurr);
      localStorage.setItem(
        "lastReset",
        now.toISOString().split("T")[0] + "T00:00:00.000Z"
      );
    }
  }, [data, updateCurr]);

  function openModal(activity) {
    if (activity) {
      setSelectedActivity(activity);
    } else {
      setSelectedActivity({
        name: "",
        goalArray: Array(31).fill(0),
        dailyCompleted: 0,
      });
    }
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleSaveChanges(updatedActivity) {
    // Only update curr, not progress
    let newCurr;
    if (!data.find((a) => a.name === updatedActivity.name)) {
      newCurr = [...data, updatedActivity];
    } else {
      newCurr = data.map((activity) =>
        activity === selectedActivity ? updatedActivity : activity
      );
    }
    updateCurr(newCurr);
    setModalOpen(false);
  }

  function handleDeleteActivity() {
    const newCurr = data.filter((activity) => activity !== selectedActivity);
    const newProgress = progress.filter(
      (p) => p.name !== selectedActivity.name
    );
    updateCurr(newCurr);
    updateProgress(newProgress);
    setModalOpen(false);
  }

  function handleActivityInc() {
    if (selectedActivity) {
      // Increment dailyCompleted
      const newCurr = data.map((activity) =>
        activity === selectedActivity
          ? { ...activity, dailyCompleted: activity.dailyCompleted + 1 }
          : activity
      );

      // Update progress by adding 1 to the corresponding activity's complete
      const newProgress = progress.map((p) =>
        p.name === selectedActivity.name
          ? { ...p, complete: p.complete + 1 }
          : p
      );

      if (!newProgress.find((p) => p.name === selectedActivity.name)) {
        newProgress.push({ name: selectedActivity.name, complete: 1 });
      }

      updateCurr(newCurr);

      updateProgress(newProgress);
      // Do not close modal here, let user keep it open if desired
      setSelectedActivity(
        newCurr.find((a) => a.name === selectedActivity.name)
      ); // Update selectedActivity
    }
  }

  return (
    <section className="h-[90vh] bg-[var(--cl-1)] p-2.5 flex flex-col items-center justify-evenly rounded-[15px] sm:col-start-2 sm:col-span-2 ">
      <h2 className="justify-self-center underline font-bold text-3xl text-[var(--cl-2)] my-5">
        Activity sheet:
      </h2>
      <div className="bg-[var(--cl-2)] h-9/12 max-w-full m-1 rounded-[15px] mb-4">
        <ActivityTable data={data} openModalFn={openModal} />
      </div>
      <ActivityModal
        isOpen={isModalOpen}
        activity={selectedActivity}
        closeModal={closeModal}
        onSaveChanges={handleSaveChanges}
        onDeleteActivity={handleDeleteActivity}
        onActivityInc={handleActivityInc}
      />
      <Button onClickFn={() => openModal()} caption="Add New Activity"></Button>
    </section>
  );
}
