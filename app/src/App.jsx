import React from "react";
import "./App.css";
import Header from "../src/assets/components/Header.jsx";
import NavBar from "./assets/components/NavBar.jsx";
import Main from "./assets/components/main/Main.jsx";
import Footer from "./assets/components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
