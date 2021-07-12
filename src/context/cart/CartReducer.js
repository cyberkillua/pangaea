import {
  ADD_TO_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const isPresent =
        state.cartItems.findIndex((item) => item.id === action.payload.id) !==
        -1;
      if (isPresent) {
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
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
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
      const upadtedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return {
        cartItems: upadtedCartItems,
      };
    }
    case DECREASE_ITEM: {
      const upadtedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }
        return item;
      });
      return {
        cartItems: upadtedCartItems,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
