import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomeHooks = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1> Counter With Custome Hooks {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(3)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};

CounterWithCustomeHooks;
