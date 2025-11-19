import React, { memo } from "react";

const Child = ({ countTwo, incTwo }) => {
  console.log("child component rendered.");
  return (
    <>
      <div>
        <h1>Child Component </h1>
        <h2> {countTwo}</h2>
      </div>
    </>
  );
};

export default memo(Child);
