import React from "react";
import "./App.css";
import Header from "../src/assets/components/Header.jsx";
import NavBar from "./assets/components/NavBar.jsx";
import Main from "./assets/components/main/Main.jsx";

function App() {
  return (
    <div className="bg-[var(--cl-2)] m-0 p-0 box-border font-sans scroll-smooth">
      <Header />
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
