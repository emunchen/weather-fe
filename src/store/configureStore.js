import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import citiesReducer from "../reducers/cities";
import usersReducer from "../reducers/users";

import sagas from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const reducers = combineReducers({
  users: usersReducer,
  cities: citiesReducer,
});

const store = createStore(reducers, enhancer);

sagaMiddleware.run(sagas);

export default store;
