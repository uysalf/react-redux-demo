import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
  FETCH_PRODUCT,
} from "./productTypes";

const productState = [];

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log("ADD_PRODUCT***:", action.payload);
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.payload.id);

    case EDIT_PRODUCT:
      const filterItems = state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            ...action.payload,
          };
        } else {
          return product;
        }
      });
      return filterItems;

    case FETCH_PRODUCT:
      return [...action.payload]; //action.payload;
    default:
      return state;
  }
};

export default productReducer;
