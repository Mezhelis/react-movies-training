import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./rootReducer"

let initialState = {};

let store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware));

export default store;