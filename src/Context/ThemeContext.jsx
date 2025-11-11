import React, { createContext } from "react";

export const ThemeData = createContext();

const ThemeContext = (props) => {
  return (
    <div>
      <ThemeData.Provider value="ankit global theme">
        {/* <h1>Global State..</h1> */}
        {props.children}
      </ThemeData.Provider>
    </div>
  );
};

export default ThemeContext;
