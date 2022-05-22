import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const text = "";
  const [isError, setIsError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {text || <h2>hello world</h2>}
      {isError && <h2>Error...</h2>}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Error
      </button>
      <div style={{ marginTop: "4rem" }}>
        {isLogin ? <h2>Welcome Soham</h2> : <h2>Please Login...</h2>}
        <button className="btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "logout" : "login"}
        </button>
      </div>
    </>
  );
};

export default ShortCircuit;
