// import redux store methods
import { createStore, applyMiddleware, compose } from "redux";
// import saga middleware
import createSagaMiddleware from "redux-saga";
// import watcher
import { watcherSaga } from "../sagas";
// import reducer
import { reducer } from "../reducers";

// create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// devtools
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// compose Saga and devtools
const composed = compose(
  applyMiddleware(sagaMiddleware),
  reduxDevTools
);

// create redux Store
export const store = createStore(reducer, composed);

// run the watcher
sagaMiddleware.run(watcherSaga);
