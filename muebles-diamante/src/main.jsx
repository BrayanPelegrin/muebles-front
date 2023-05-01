import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { MueblesApp } from "./MueblesApp.jsx";

import "./public/styles.css";

// #00abfb

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MueblesApp />
    </BrowserRouter>
  </React.StrictMode>
);
