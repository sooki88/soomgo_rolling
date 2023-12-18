import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/reset.css";
import { BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./components/ui-Navs/NavigationBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
    </BrowserRouter>
  </React.StrictMode>
);
