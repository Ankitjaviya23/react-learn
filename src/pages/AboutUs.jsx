import React from "react";

import Memo from "../component/UseMemo/Memo";
import CallBackDemo from "../component/UseCallback/UseCallback";

const AboutUs = () => {
  return (
    <>
      <h1>AboutUs</h1>
      <hr />
      {/* <div className="mt-5">
        <Memo />
      </div> */}

      <div className="mt-5">
        <CallBackDemo />
      </div>
    </>
  );
};

export default AboutUs;
