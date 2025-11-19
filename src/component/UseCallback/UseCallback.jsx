import React, { useCallback, useState } from "react";
import Child from "./Child";
const CallBackDemo = () => {
  const [countOne, setCountOne] = useState(0);

  const [countTwo, setCountTwo] = useState(0);

  const incOne = () => {
    setCountOne(countOne + 1);
  };

  const incTwo = useCallback(() => {
    setCountTwo(countTwo + 1);
  }, countTwo);

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-4xl font-bold">Use CallBack</h1>
        <Child countTwo={countTwo} incTwo={incTwo} />
        <hr />

        <button onClick={incOne}> Counter - {countOne} </button>
        {/* <button onClick={incTwo}> Counter - {countTwo} </button> */}
      </div>
    </>
  );
};

export default CallBackDemo;
