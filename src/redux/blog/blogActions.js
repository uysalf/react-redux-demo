import { v4 as uuid } from "uuid";
import { ADD_BLOG, EDIT_BLOG, REMOVE_BLOG } from "./blogTypes";

export const addBlog = ({ title = "", description = "", dateAdded = 0 }) => ({
  type: ADD_BLOG,
  payload: {
    id: uuid(),
    title: title,
    description: description,
    dateAdded: dateAdded,
  },
});

export const editBlog = (updates) => ({
  type: EDIT_BLOG,
  payload: updates,
});

export const removeBlog = ({ id }) => ({
  type: REMOVE_BLOG,
  payload: { id },
});
