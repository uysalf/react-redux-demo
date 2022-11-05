import { ADD_BLOG, EDIT_BLOG, REMOVE_BLOG } from "./blogTypes";

const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return [...state, action.payload];
    case REMOVE_BLOG:
      return state.filter((blog) => blog.id !== action.payload.id);

    case EDIT_BLOG:
      const filterItems = state.map((blog) => {
        if (blog.id === action.payload.id) {
          return {
            ...blog,
            ...action.payload,
          };
        } else {
          return blog;
        }
      });
      return filterItems;

    default:
      return state;
  }
};

export default blogReducer;
