import React from "react";
import { Slider } from "antd";
import { useCounterWithContext } from "../Provider/Provider";

const Counter = () => {
  const {
    onIcrease,
    onDicrease,
    value,
    minimumReached
  } = useCounterWithContext();

  return (
    <>
      <div>
        <button onClick={onIcrease}>Increase</button>
        <span style={{ marginLeft: "5px" }}>{value}</span>
        <button
          disabled={minimumReached}
          style={{ marginLeft: "5px" }}
          onClick={onDicrease}
        >
          Decrease
        </button>
      </div>
    </>
  );
};

export const CounterSlider = () => {
  const { value } = useCounterWithContext();
  return <Slider defaultValue={value} value={value} disabled />;
};

export default Counter;
