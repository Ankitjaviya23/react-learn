import React, { useMemo, useState } from "react";

const Memo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [name, setName] = useState("Test Ankit");

  const incOne = () => {
    setCountOne(countOne + 1);
  };

  const incTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    console.warn("isEven");
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  const updateName = () => {
    let tempName = name === "Test Ankit" ? "Demo Ankit" : "Test Ankit";
    setName(tempName);
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold">Use Memo</h1>
      <hr />

      <button onClick={incOne}> Counter - {countOne} </button>

      <br />
      <label>{isEven ? "Even" : "Odd"}</label>

      <br />
      <button onClick={incTwo}> Counter - {countTwo} </button>

      <br />
      <button onClick={updateName}> Name: {name} </button>
    </div>
  );
};

export default Memo;
