import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
  FETCH_PRODUCT,
} from "./productTypes";

export const addProduct = ({
  id = 0,
  title = "",
  description = "",
  price = 0,
}) => ({
  type: ADD_PRODUCT,
  payload: {
    id: id,
    title: title,
    description: description,
    price: price,
  },
});

export const editProduct = (updates) => ({
  type: EDIT_PRODUCT,
  payload: updates,
});

export const removeProduct = ({ id }) => ({
  type: REMOVE_PRODUCT,
  payload: { id },
});

export const fetchProduct = (products) => ({
  type: FETCH_PRODUCT,
  payload: products,
});
