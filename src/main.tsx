import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TheView } from "./components/theView/TheView";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TheView />
  </React.StrictMode>
);
