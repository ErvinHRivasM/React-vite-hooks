import { useState } from "react";

export const CounterApp = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const updateCounters = (counter: number) => {
    let tmpCounter = counter + 1;
    //console.log(tmpCounter);
    const counters = {
      //counter1: tmpCounter,
      counter1: counter,
      counter2: 20,
      counter3: 30,
    };
    //setCounter(counters);
    setCounter({ ...counters, counter1: counter + 1 }); // for change only in one parameter
  };

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => updateCounters(counter1)}
      >
        +1
      </button>
    </>
  );
};
