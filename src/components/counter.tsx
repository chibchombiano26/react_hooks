import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <span style={{ marginLeft: "5px" }}>{value}</span>
      <button
        style={{ marginLeft: "5px" }}
        onClick={() => setValue(value + -1)}
      >
        Decrease
      </button>
    </>
  );
};

export default Counter;
