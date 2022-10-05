import React, { useState } from "react";
import { data } from "./data";

export const BdayReminderList = ({ people }) => {
  const [mylist, setmylist] = useState(data);
  const removeItems = (id) => {
    setmylist(mylist.filter((eachId) => eachId.id !== id));
  };
  return (
    <>
      <h3>{mylist.length} BIRTHDAYS</h3>

      {mylist.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt="image" />
            <h4>{name}</h4>
            <p>{age}</p>
            <button onClick={() => removeItems(id)}>Delete {name}</button>
          </article>
        );
      })}
      <button onClick={() => setmylist([])}>Clear All</button>
    </>
  );
};
export default BdayReminderList;
