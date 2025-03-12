import React from "react";

export default function Button({ onClickFn, caption }) {
  return (
    <button
      className="active:bg-[var(--cl-6)] hover:font-bold  hover:bg-[var(--cl-3)]  
        rounded-3xl bg-[var(--cl-5)] text-[var(--cl-2)] py-3 px-5 text-xs"
      onClick={onClickFn}
    >
      {caption}
    </button>
  );
}
