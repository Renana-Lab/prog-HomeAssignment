import React from "react";
import { createRoot } from "react-dom/client";
import { LabDashboard } from "./LabDashboard";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LabDashboard />
  </React.StrictMode>,
);
