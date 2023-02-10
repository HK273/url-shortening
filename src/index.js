import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/layouts/Navbar";
import NavBar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Hero />
  </React.StrictMode>
);
