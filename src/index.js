import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";
import URL from "./components/url-short/URL";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <URL />
  </React.StrictMode>
);
