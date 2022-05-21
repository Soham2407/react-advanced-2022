import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);

    return () => {
      console.log("clean up");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");
  return (
    <>
      <h1>Window Size</h1>
      <h2>{width} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
