import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("generated again :C");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(7);
      }}
    >
      Incrementar
    </button>
  );
});
