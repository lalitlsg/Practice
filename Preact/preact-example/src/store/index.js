import { createStore } from "redux";
import reducer from "./reducers";

const configureStore = (initialState = {}) =>
  createStore(reducer, initialState);

export default configureStore;
