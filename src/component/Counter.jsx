import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Use State</div>
          <p className="text-gray-700 text-base">
            Count:
            <span className="text-red-600"> {count}</span>
          </p>

          {count <= 0 ? (
            <span className="text-cyan-900">
              Negative numbers are not allow.
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={Increase}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 rounded text-center"
          >
            +
          </button>

          <button
            onClick={Decrease}
            class="bg-red-500 hover:bg-red-700 text-white font-bold ml-2 py-0 px-2 rounded text-center"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
