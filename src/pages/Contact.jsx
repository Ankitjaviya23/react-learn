import React from "react";
import { userPreference } from "../store/preferenceStore";
import { useBearStore } from "../store/BearStore";
const Contact = () => {
  const { defaultPref, updatePref } = userPreference();

  const setvalue = defaultPref == "contact" ? "blog" : "contact";

  const availableBear = useBearStore((state) => state.bears);
  const handleAdd = useBearStore((state) => state.increaseBears);
  const removeSingle = useBearStore((state) => state.removeBears);
  const handleRemoveAll = useBearStore((state) => state.removeAllBears);
  const hungryStatus = useBearStore((state) => state.isHungry);
  const handleStatus = useBearStore((state) => state.HungryNow);

  return (
    <div>
      <h1>Contact For {defaultPref}</h1>
      <button onClick={() => updatePref(setvalue)}>Update </button>
      <hr />
      <h1 className="text-8xl font-bold pb-10">Bear Demo with zustand</h1>
      <h1 className="text-4xl font-bold">
        BEARS ARE IN THE FOREST:
        {availableBear} <br />
        AND ALL ARE {hungryStatus ? "NOT EAT FOOD" : "EAT WELL."}
      </h1>
      <button onClick={handleAdd}>Add Bear</button>

      <button onClick={handleStatus}>
        {" "}
        {hungryStatus ? "Give Food" : "Remove Fodo"}{" "}
      </button>

      {availableBear > 0 && (
        <>
          <button onClick={removeSingle}>Remove single Bear</button>
          <button onClick={handleRemoveAll}>Remove All Bears</button>
        </>
      )}
    </div>
  );
};

export default Contact;
