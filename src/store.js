import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;

/*
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const configureStore = initialState => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export default configureStore;
*/
