import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-between w-36 sm:w-28  lg:w-40 md:w-32 px-4 py-2 border rounded-lg shadow-sm">
      <button className="text-gray-500 hover:text-gray-700" onClick={decrement}>
        &#8722;
      </button>
      <span className="text-lg font-medium">{count}</span>
      <button className="text-gray-500 hover:text-gray-700" onClick={increment}>
        &#43;
      </button>
    </div>
  );
};

export default Counter;

