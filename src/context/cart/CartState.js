import { useReducer, useState } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  ADD_PRODUCT
} from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    cartItems: [],
    updatedProduct: [],
  };
  // const [updatedProduct, setUpdatedProduct] = useState([]);
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

  const addProduct = (item) => {
    dispatch({type: ADD_PRODUCT, payload: item})
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeItem,
        increaseItem,
        decreaseItem,
        addProduct,
        // newProduct: [updatedProduct, setUpdatedProduct]
        updatedProduct: state.updatedProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
