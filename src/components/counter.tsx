import React, { useEffect, useState, useMemo } from "react";

type useCounterType = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  minimumReached: boolean;
};

const useCounter = (): useCounterType => {
  const [value, setValue] = useState<number>(0);
  const [minimumReached, setMinimumReached] = useState<boolean>(false);

  useEffect(() => {
    value === 0 ? setMinimumReached(true) : setMinimumReached(false);
  }, [value]);

  return {
    setValue,
    value,
    minimumReached
  };
};

const Counter = () => {
  const { setValue, value, minimumReached } = useCounter();

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
    </>
  );
};

export const Counter2 = () => {
  const { setValue, value, minimumReached } = useCounter();

  return (
    <>
      <div>
        <a onClick={() => setValue(value + 1)}>Increase</a>
        <span style={{ marginLeft: "5px" }}>{value}</span>
        <a style={{ marginLeft: "5px" }} onClick={() => setValue(value + -1)}>
          Decrease
        </a>
      </div>
    </>
  );
};

export default Counter;
