import React from "react";

export default function Button({ caption }) {
  return (
    <button
      className="active:bg-[var(--cl-6)] hover:font-bold  hover:bg-[var(--cl-3)]  
        rounded-3xl bg-[var(--cl-5)] text-[var(--cl-2)] py-1.5 px-3.5 text-xs"
    >
      {caption}
    </button>
  );
}
