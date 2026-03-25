import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByNumber,
} from "./features/counter/counterSlice";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>redux toolkit practice</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increament
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(incrementByNumber(Number(num)));
        }}
      >
        increment by number
      </button>
    </>
  );
}
