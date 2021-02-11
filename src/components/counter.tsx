import React, { useEffect, useState, useMemo } from "react";

const Counter = () => {
  const [value, setValue] = useState<number>(0);
  const [minimumReached, setMinimumReached] = useState<boolean>(false);
  const [showLimitReached, setShowLimitReached] = useState<boolean>(false);

  useEffect(() => {
    value === 0 ? setMinimumReached(true) : setMinimumReached(false);
    value === 10 && setShowLimitReached(true);
  }, [value]);

  const label = useMemo(() => {
    return (
      <span> {showLimitReached ? `limit reached` : "limit not reached"}</span>
    );
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setValue(value + 1)}>Increase</button>
        <span style={{ marginLeft: "5px" }}>{value}</span>
        <button
          disabled={minimumReached}
          style={{ marginLeft: "5px" }}
          onClick={() => setValue(value + -1)}
        >
          Decrease
        </button>
      </div>
      {label}
    </>
  );
};

export default Counter;
