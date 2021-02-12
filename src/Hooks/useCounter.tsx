import { useEffect, useState } from "react";

export type useCounterType = {
  value: number;
  minimumReached: boolean;
  onDicrease: () => void;
  onIcrease: () => void;
};

const useCounter = (): useCounterType => {
  const [value, setValue] = useState<number>(0);
  const [minimumReached, setMinimumReached] = useState<boolean>(false);

  useEffect(() => {
    if (value === 0) {
      setMinimumReached(true);
    } else {
      setMinimumReached(false);
    }
  }, [value]);

  const onIcrease = () => {
    setValue(value + 1);
  };

  const onDicrease = () => {
    setValue(value - 1);
  };

  return {
    value,
    minimumReached,
    onDicrease,
    onIcrease
  };
};

export default useCounter;
