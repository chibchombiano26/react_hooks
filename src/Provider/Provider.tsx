import { createContext, useContext, useEffect, useState } from "react";

export const UseCounterContext = createContext({});

export const CounterProvider = (props) => {
  const [value, setValue] = useState<number>(0);
  const [minimumReached, setMinimumReached] = useState<boolean>(false);

  useEffect(() => {
    value === 0 ? setMinimumReached(true) : setMinimumReached(false);
  }, [value]);

  const onIcrease = () => {
    setValue(value + 1);
  };

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

  if (!context) {
    throw new Error("Please use this hook with the proper provider");
  }

  return context;
};
