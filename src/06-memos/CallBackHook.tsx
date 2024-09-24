import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementF = useCallback((increStep) => {
    //setCounter(counter + 1); problem generated
    setCounter((value) => value + increStep);
  }, []);

  /*  useEffect(() => {
    incrementF();
  }, [incrementF]); No es el caso peroo puede generar ciclos infinitos este uso! */

  /*const increment = () => {
    setCounter(counter + 1);
  };*/

  return (
    <>
      <h1> useCallback Hook: {counter} </h1>
      <hr />
      <ShowIncrement increment={incrementF} />
    </>
  );
};
