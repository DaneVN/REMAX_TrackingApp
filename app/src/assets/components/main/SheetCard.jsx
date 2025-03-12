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

    if (lastReset == null || now.getTime() - lastReset.getTime() > 86400000) {
      //if the difference between the lastReset and current time is more than 24 hrs
      const updatedData = data.map((activity) => ({
        ...activity,
        dailyCompleted: 0,
      }));
      updateData(updatedData);
      localStorage.setItem(
        "lastReset",
        //Set to midnight of the current date so that the lastReset value is accurate next time
        now.toISOString().split("T")[0] + "T00:00:00.000Z"
      );
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
      setModalOpen(false);
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
