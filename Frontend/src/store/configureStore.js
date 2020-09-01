import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { looksBuilderReducer } from "../reducers/looksBuilderReducers";

export default () => {
  const store = createStore(
    combineReducers({
      looksBuilderReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
