import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../reducer/actions/action";

function Counter() {
  const count = useSelector((store) => store.counter.count);

  const dispatch = useDispatch();

  // Dispatch: Hangi action'u reducer'a göndereceğimi belirleyen fonksiyonu parametre olarak alır.

  return (
    <>
      <h1>Count: {count}</h1>

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
