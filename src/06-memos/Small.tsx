//import { memo } from "react";
import React from "react";

//export const Small = memo(({ value }) => {
export const Small = React.memo(({ value }) => {
  console.log("painting again :S");
  return <small>{value}</small>;
});
