import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "./reducers/TodoReducers";

const reducer = combineReducers({
  Todo: TodoReducer,
});

const initialState = {};

const middleware = [thunk];

const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
