import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [peoples, setPeoples] = useState(data);
  const removePeople = (id) => {
    const newPeople = peoples.filter((people) => people?.id !== id);
    setPeoples(newPeople);
  };
  return (
    <>
      {peoples.map((people) => {
        return (
          <div className="item" key={people?.id}>
            <h4>{people?.name}</h4>
            <button onClick={() => removePeople(people?.id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeoples([])}>
        clear peoples
      </button>
    </>
  );
};

export default UseStateArray;
