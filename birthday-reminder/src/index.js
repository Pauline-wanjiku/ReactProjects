import React from "react";
import ReactDOM from "react-dom/client";
import BdayReminderList from "./list";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Birthday Reminder</h1>
    <section className="container">
      <BdayReminderList />
    </section>
  </React.StrictMode>
);
