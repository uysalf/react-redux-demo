// import { createStore, configureStore, combineReducers } from "redux";
// import second from './roo'
// // import cakeReducer from "./cake/cakeReducer";
// // const store = createStore(cakeReducer);

// // const store = createStore(
// //   combineReducers({
// //     cakes: cakeReducer,
// //   })
// // );

// export default store;
// import cakeReducer from "./cake/cakeReducer";
import { createStore } from "redux";
import rootReducer from "./rootReducer";

// import { combineReducers } from "redux";
// import cakeReducer from "./cake/cakeReducer";
// import iceCreamReducer from "./iceCream/iceCreamReducer";

const store = createStore(rootReducer);
// const store = createStore(
//   combineReducers({
//     cake: cakeReducer,
//     iceCream: iceCreamReducer,
//   })
// );
export default store;
