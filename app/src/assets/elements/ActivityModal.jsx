import React from "react";

export default function ActivityModal({ activity = {} }) {
  /* testing data transfer */
  return (
    <>
      <h3> Activity Information:</h3>
      <p> {activity}</p>
    </>
  );
}
