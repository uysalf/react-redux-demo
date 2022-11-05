import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UsersContainer from "./components/UsersContainer";
import BlogsContainer from "./components/BlogsContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Merhaba
        <CakeContainer />
        <NewCakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <ItemContainer cake />
        <ItemContainer />
        <BlogsContainer />
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
