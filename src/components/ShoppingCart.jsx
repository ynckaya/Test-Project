import { useReducer } from "react";
import { cartReducer } from "../reducer/reducer";

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = () => dispatch({ type: "add", item: "Apple" });
  const removeItem = () => dispatch({ type: "remove", item: "Apple" });

  return (
    <div>
      <h2>Cart: {cart.join(", ")}</h2>
      <button onClick={addItem}>Add Apple</button>
      <button onClick={removeItem}>Remove Apple</button>
    </div>
  );
}

export default ShoppingCart;
