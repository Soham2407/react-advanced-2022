import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  const clickHandler = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={clickHandler}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
