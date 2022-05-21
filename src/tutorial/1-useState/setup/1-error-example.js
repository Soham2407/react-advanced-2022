import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const clickHandler = () => {
    title = "hello world";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={clickHandler}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
