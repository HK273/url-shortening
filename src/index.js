import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";
import URLShort from "./components/url-short/URLShort";
import SectionTwo from "./components/layouts/SectionTwo";
import SectionThree from "./components/layouts/SectionThree";
import Footer from "./components/layouts/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <URLShort />
    <SectionTwo />
    <SectionThree />
    <Footer />
  </React.StrictMode>
);
