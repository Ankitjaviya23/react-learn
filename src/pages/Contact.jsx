import React from "react";
import { userPreference } from "../store/preferenceStore";
const Contact = () => {
  const { defaultPref, updatePref } = userPreference();

  const setvalue = defaultPref == "contact" ? "blog" : "contact";

  return (
    <div>
      <h1>Contact For {defaultPref}</h1>

      <button onClick={() => updatePref(setvalue)}>Update </button>
    </div>
  );
};

export default Contact;
