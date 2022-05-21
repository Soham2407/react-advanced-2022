import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "virat",
    age: 33,
    message: "run machine",
  });

  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMesageHandler = () => {
    setPerson({ ...person, message: "king kohli" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMesageHandler}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
