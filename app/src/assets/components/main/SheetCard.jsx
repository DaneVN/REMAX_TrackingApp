import React from "react";
import ActivityTable from "../../elements/ActivityTable";
import ActivityModal from "../../elements/ActivityModal";

export default function SheetCard({ data, updateData }) {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedActivity, setSelectedActivity] = React.useState(null);

  function openModal(activity) {
    setSelectedActivity(activity);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleSaveChanges(updatedActivity) {
    const newData = data.map((activity) => {
      if (activity === selectedActivity) {
        return updatedActivity;
      }
      return activity;
    });
    updateData(newData);
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
    </section>
  );
}
