import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Substitua ReactDOM.render pelo método createRoot
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
