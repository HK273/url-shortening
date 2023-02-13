import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>
);
