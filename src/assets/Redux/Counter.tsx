import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counterState.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div onClick={() => dispatch({ type: "counter/increment" })}>+</div>
      <div>{counter}</div>

      <div onClick={() => dispatch({ type: "counter/decrement" })}>-</div>
    </div>
  );
}

export default Counter;
