import { createContext, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  DECREASE_PRODUCT_QUANTITY,
  DELETE_PRODUCT_CART,
  INCREASE_PRODUCT_QUANTITY,
} from '../actions';

const CartContext = createContext();

const initialState = {
  cart: [],
  total_amount: 0,
  total_quantity: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, name, price, imageURL, quantity) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, name, price, imageURL, max_quantity: quantity },
    });
  };

  const deleteProduct = (id) => {
    dispatch({ type: DELETE_PRODUCT_CART, payload: id });
  };

  const increaseQuantity = (id, max_quantity) => {
    dispatch({
      type: INCREASE_PRODUCT_QUANTITY,
      payload: { id, max_quantity },
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: DECREASE_PRODUCT_QUANTITY, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        deleteProduct,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
