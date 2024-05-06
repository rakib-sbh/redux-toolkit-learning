import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

import "../../styles/counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h3>Count : {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment By 5
      </button>
    </div>
  );
};

export default Counter;
