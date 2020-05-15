import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root-sagas";
import rootReducer from "./reducers/root";
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
