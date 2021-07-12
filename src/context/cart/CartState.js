import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const increaseItem = (item) => {
    dispatch({ type: INCREASE_ITEM, payload: item });
  };
  const decreaseItem = (item) => {
    dispatch({ type: DECREASE_ITEM, payload: item });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
