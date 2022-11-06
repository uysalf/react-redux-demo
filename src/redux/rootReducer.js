import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";
import blogReducer from "./blog/blogReducer";
import productReducer from "./product/productReducer";
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  blog: blogReducer,
  product: productReducer,
});

export default rootReducer;
