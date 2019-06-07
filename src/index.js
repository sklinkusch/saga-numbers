// import React
import React from "react";
import ReactDOM from "react-dom";
// import React bindings
import { Provider } from "react-redux";
// import store
import { store } from "./store";
// import App
import App from "./components/App";
// import styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
// import serviceWorker
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
