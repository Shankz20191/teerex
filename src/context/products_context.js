import react, { useEffect, useContext, useReducer } from 'react';
import axios from 'axios';
import { products_url as url } from '../utils/constants';
import reducer from '../reducers/products_reducer';

import {
  ADD_FILTERS,
  FILTER_PRODUCTS,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS,
} from '../actions';

const ProductsContext = react.createContext();

const initialState = {
  all_products: [],
  filtered_products: [],
  products_loading: false,
  products_error: false,
  show_all_products: true,
  filter_by: {
    color: [],
    type: [],
    gender: [],
    price: [],
  },
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const updateFilters = (e) => {
    const category = e.target.name;
    const value = e.target.value;
    const toInclude = e.target.checked;

    dispatch({ type: ADD_FILTERS, payload: { category, value, toInclude } });
    dispatch({ type: FILTER_PRODUCTS, payload: { category } });
  };

  const searchProducts = (searchValue) => {
    dispatch({ type: SEARCH_PRODUCTS, payload: searchValue });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, updateFilters, searchProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
