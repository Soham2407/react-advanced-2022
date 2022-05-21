import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      document.title = `new messages(${value})`;
    }
  });

  useEffect(() => {
    console.log("hello world");
  });
  return (
    <>
      <h3>{value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increment
      </button>
    </>
  );
};

export default UseEffectBasics;
