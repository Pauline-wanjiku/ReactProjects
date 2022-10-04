import React from "react";
import ReactDOM from "react-dom/client";
import BirthdayReminderApp from "./BirthdayReminderApp"
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BirthdayReminderApp />
  </React.StrictMode>
);
