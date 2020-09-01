import React from "react";
import Router from "./Router";
import "./scss/style.scss";

import configureStore from "./store/configureStore"
import {Provider} from "react-redux"
import Navbar from "./utils/Navbar";

const store = configureStore()
// store.subscribe(()=>{
//   console.log(store.getState());
// })

const App = props => {
  return (
      <Provider store = {store}>
        <Navbar />
        <Router />
      </Provider>
    );
};

export default App;
