/*
Name: Patrick Sullivan
Date: 4/18/2026
File: main.jsx
Description: Entry point for the React app with BrowserRouter
*/
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)