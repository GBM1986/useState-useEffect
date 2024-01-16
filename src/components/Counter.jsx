import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleResetClick = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <p className="mb-4 text-lg font-bold">{`You have clicked on the button ${count} time${
        count !== 1 ? "s" : ""
      }.`}</p>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Click me
      </button>
      <button
        onClick={handleResetClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 mt-2"
      >
        Reset
      </button>
    </div>
  )
}

export default Counter;
