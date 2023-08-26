import {
  ADD_FILTERS,
  FILTER_PRODUCTS,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS,
} from '../actions';
import { filterProducts, filterProductsByPrice } from '../utils/helpers';

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      all_products: action.payload,
      filtered_products: action.payload,
      products_loading: false,
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  if (action.type === ADD_FILTERS) {
    let { category, toInclude, value } = action.payload;
    let filter;
    if (toInclude) {
      filter = state.filter_by[category]
        ? [...state.filter_by[category], value]
        : [value];
    } else {
      filter = state.filter_by[category].filter((item) => item !== value);
    }

    return {
      ...state,
      filter_by: { ...state.filter_by, [action.payload.category]: filter },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    let tempProducts = [...state.all_products];

    const { color, gender, type, price } = state.filter_by;

    if (color.length) {
      tempProducts = filterProducts(color, tempProducts);
    }

    if (gender.length) {
      tempProducts = filterProducts(gender, tempProducts);
    }

    if (type.length) {
      tempProducts = filterProducts(type, tempProducts);
    }

    if (price.length) {
      tempProducts = filterProductsByPrice(price, tempProducts);
    }

    return { ...state, filtered_products: tempProducts };
  }

  if ((action.type = SEARCH_PRODUCTS)) {
    const tempProducts = state.all_products.filter((product) => {
      return product.name.toLowerCase().includes(action.payload.toLowerCase());
    });

    return { ...state, filtered_products: tempProducts };
  }

  throw new Error('Unknown action type');
};

export default products_reducer;
