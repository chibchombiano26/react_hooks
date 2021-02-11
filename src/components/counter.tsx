import React, { useEffect, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState<number>(0);
  const [minimumReached, setMinimumReached] = useState<boolean>(false);

  useEffect(() => {
    console.log(value);
    value === 0 ? setMinimumReached(true) : setMinimumReached(false);
  }, [value]);

  return (
    <>
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <span style={{ marginLeft: "5px" }}>{value}</span>
      <button
        disabled={minimumReached}
        style={{ marginLeft: "5px" }}
        onClick={() => setValue(value + -1)}
      >
        Decrease
      </button>
    </>
  );
};

export default Counter;
