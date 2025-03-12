import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globals.css";
import WelcomePage from "./pages/WelcomePage";
import { Toaster } from "./components/ui/toaster";
import DemoPage from "./pages/DemoPage";
import LearnMore from "./pages/LearnMore";
import AboutUs from "./pages/AboutUs";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Toaster />
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="demo" element={<DemoPage />} />
        <Route path="learn-more" element={<LearnMore />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
