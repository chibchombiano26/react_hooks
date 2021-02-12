import React, { createContext, useContext, useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { useCounterType } from "../Hooks/useCounter";

export const UseCounterContext = createContext<useCounterType>(null!);

export const CounterProvider: React.FC = (props) => {
  const [value, setValue] = useState<number>(0);
  const [minimumReached, setMinimumReached] = useState<boolean>(false);

  useEffect(() => {
    if (value === 0) {
      setMinimumReached(true);
    } else {
      setMinimumReached(false);
    }
  }, [value]);

  function onIcrease() {
    setValue(value + 1);
  }

  const onDicrease = () => {
    setValue(value - 1);
  };

  const context = {
    value,
    minimumReached,
    onDicrease,
    onIcrease
  };

  return (
    <UseCounterContext.Provider value={context}>
      {props.children}
    </UseCounterContext.Provider>
  );
};

export const useCounterWithContext = () => {
  const context = useContext(UseCounterContext);
  if (isEmpty(context)) {
    console.log("No encuentro mi contexto");
  }

  return context;
};
