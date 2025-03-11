import React from "react";
import ActivityTable from "../../elements/ActivityTable";
import ActivityModal from "../../elements/ActivityModal";
import Button from "../../elements/Button";

export default function SheetCard({ data, updateData }) {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedActivity, setSelectedActivity] = React.useState(null);

  function openModal(activity) {
    if (activity) {
      setSelectedActivity(activity);
    } else {
      // Dud data
      setSelectedActivity({
        name: "New Task Name",
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
    //check if activity exists in state yes ? update existing else create
    if (!data.find((a) => a.name == updatedActivity.name)) {
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
