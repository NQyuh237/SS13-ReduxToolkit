import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { random } from "../redux/useSlices/randomSlice";

export default function Random() {
  const dispatch = useDispatch();
  const listNumber = useSelector((number) => number.random);
  console.log(listNumber);
    console.log(listNumber);
  const handleRandom = () => {
    const randomReducer = Math.ceil(Math.random() * 10);
    dispatch(random(randomReducer));
  };
  return (
      <div>
          <h1>ListNumber:{JSON.stringify(listNumber)}</h1>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
