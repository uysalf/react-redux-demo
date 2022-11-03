import { createStore, configureStore, combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
const store = createStore(cakeReducer);

// const store = createStore(
//   combineReducers({
//     cakes: cakeReducer,
//   })
// );

export default store;
