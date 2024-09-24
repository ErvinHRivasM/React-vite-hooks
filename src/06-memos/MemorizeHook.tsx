import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heaveStuff = (iterationNumber = 1000) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Here u' go");
  }
  return `${iterationNumber} iterations do it`;
};

export const MemorizeHook = () => {
  const { counter, increment } = useCounter(40000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heaveStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
