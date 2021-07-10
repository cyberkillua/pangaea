import {
  ADD_TO_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(action.payload.id);
      // console.log(state.cartItem);
      if (state.cartItems.length < 1) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      } else {
        return {
          cartItems: state.cartItems.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        };
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case INCREASE_ITEM: {
      return {
        ...state,

        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,

        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
