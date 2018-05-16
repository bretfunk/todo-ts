if (!global["_babelPolyfill"]) {
  require("babel-polyfill");
}

import { createStore } from "redux";
import todoReducer from "../ducks/todo";
// import rootReducer from "./reducers/index";

// TODO make rootReducer
const store = createStore(todoReducer);

export default store;
