import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }: any) => {
      const coords = { x, y };
      console.log(coords);
    };
    //console.log("mounted component!.");
    window.addEventListener(
      "mousemove",
      ("mousemove", onMouseMove) /*=> {
      //problema.. fuga de Memoria si no se controla.
      console.log(event.x, event.y);
    }*/
    );
    return () => {
      //console.log("Unmounted component!.");
      window.removeEventListener("mousemove", ("mousemove", onMouseMove));
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
