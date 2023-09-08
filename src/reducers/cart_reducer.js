import { toast } from 'react-toastify';

import {
  ADD_TO_CART,
  DECREASE_PRODUCT_QUANTITY,
  DELETE_PRODUCT_CART,
  INCREASE_PRODUCT_QUANTITY,
} from '../actions';

const toastConfig = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const newCart = { ...state };
    const { cart } = newCart;
    const { id, price } = action.payload;

    const index = cart.findIndex((item) => item.id === id);

    if (index === -1) {
      cart.push({ ...action.payload, quantity: 1 });
      newCart.total_amount += price;
      newCart.total_quantity += 1;
    } else {
      const currentItem = cart[index];

      if (currentItem.max_quantity > currentItem.quantity) {
        currentItem.quantity += 1;
        newCart.total_amount += price;
        newCart.total_quantity += 1;
      } else {
        toast.error('Max quantity reached!', toastConfig);
      }
    }

    return newCart;
  }

  if (action.type === DELETE_PRODUCT_CART) {
    let newCart = { ...state };

    const deletedCart = newCart.cart.filter((product) => {
      if (product.id === action.payload) {
        newCart.total_amount =
          newCart.total_amount - product.quantity * product.price;
        newCart.total_quantity -= product.quantity;
      }
      return product.id !== action.payload;
    });

    newCart.cart = deletedCart;

    return newCart;
  }

  if (action.type === INCREASE_PRODUCT_QUANTITY) {
    let newCart = { ...state };

    newCart.cart.forEach((product) => {
      if (product.id === action.payload.id) {
        if (product.quantity !== action.payload.max_quantity) {
          product.quantity += 1;
          newCart.total_amount += product.price;
          newCart.total_quantity += 1;
        } else {
          newCart.total_quantity += 0;
          toast.error('Max quantity reached!', toastConfig);
        }
      }
    });

    return newCart;
  }

  if (action.type === DECREASE_PRODUCT_QUANTITY) {
    const productId = action.payload;
    const newCart = { ...state };

    newCart.cart.forEach((product) => {
      if (product.id === productId) {
        if (product.quantity > 0) {
          product.quantity -= 1;
          newCart.total_amount -= product.price;
          newCart.total_quantity -= 1;
        }
      }
    });

    return newCart;
  }

  throw new Error('Invalid Cart Action');
};

export default cart_reducer;
