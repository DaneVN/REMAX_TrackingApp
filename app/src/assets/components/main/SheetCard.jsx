import React from "react";
import ActivityTable from "../../elements/ActivityTable";
import ActivityModal from "../../elements/ActivityModal";
import Button from "../../elements/Button";

export default function SheetCard({ data, updateData }) {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedActivity, setSelectedActivity] = React.useState(null);

  // Reset dailyCompleted at midnight
  React.useEffect(() => {
    const now = new Date();
    const lastReset = localStorage.getItem("lastReset")
      ? new Date(localStorage.getItem("lastReset"))
      : null;
    if (!lastReset || now.getDate() !== lastReset.getDate()) {
      const updatedData = data.map((activity) => ({
        ...activity,
        dailyCompleted: 0,
      }));
      updateData(updatedData);
      localStorage.setItem("lastReset", now.toISOString());
    }
  }, [data, updateData]);

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
    if (!data.find((a) => a.name === updatedActivity.name)) {
      const newData = [...data, updatedActivity];
      updateData(newData);
    } else {
      const newData = data.map((activity) =>
        activity === selectedActivity ? updatedActivity : activity
      );
      updateData(newData);
    }
    setModalOpen(false);
  }

  function handleDeleteActivity() {
    const newData = data.filter((activity) => activity !== selectedActivity);
    updateData(newData);
    setModalOpen(false);
  }

  function handleActivityInc() {
    if (selectedActivity) {
      const newData = data.map((activity) =>
        activity === selectedActivity
          ? { ...activity, dailyCompleted: activity.dailyCompleted + 1 }
          : activity
      );
      updateData(newData);
    }
  }

  return (
    <section className="h-[90vh] bg-[var(--cl-1)] p-2.5 rounded-[15px] sm:col-start-2 sm:col-span-2">
      <div className="bg-[var(--cl-2)] h-5/6 max-w-full m-1 rounded-[15px] mb-4">
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
      <button
        onClick={() => openModal()}
        className="bg-[var(--cl-2)] text-[var(--cl-1)] p-2 rounded mt-2 w-full sm:w-auto"
      >
        Add New Activity
      </button>
    </section>
  );
}
