import React, { useState } from "react";
import List from "./list";
import data from "./data";
import "./style.css";

function BirthdayReminderApp() {
    const [people, setPeople] = useState(data);
  return (
    <>
      <h1>Birthday Reminder</h1>
      <section className="container">
        <h3>{people.length} BIRTHDAYS</h3>
        <List people={people} />
        <button onClick={()=>setPeople([])}>Clear Button</button>
      </section>
    </>
  );
}
export default BirthdayReminderApp;
