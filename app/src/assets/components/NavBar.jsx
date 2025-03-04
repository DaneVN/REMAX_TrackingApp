import React from "react";

export default function NavBar() {
  return (
    <nav class="bg-cl-2 flex justify-around p-1.25 text-cl-4 border-y-2 border-cl-1 sticky top-0 z-20 transition-top duration-300 ease-in-out">
      <div class="profile px-1.25">
        <p>0</p>
      </div>
      <a href="#home" class="nav-item px-2.5 text-cl-4 no-underline">
        Home
      </a>
      <a href="#stats" class="nav-item px-2.5 text-cl-4 no-underline">
        Stats
      </a>
      <a href="#sheet" class="nav-item px-2.5 text-cl-4 no-underline">
        Activity Sheet
      </a>
    </nav>
  );
}
