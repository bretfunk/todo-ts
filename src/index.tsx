import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
//old:
//import * as React from 'react';
//import * as ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(
//<App />,
//document.getElementById('root') as HTMLElement
//);
//registerServiceWorker();
