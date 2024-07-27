import { configureStore } from "@reduxjs/toolkit";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { categoryReducer } from "./categoryReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
    cash: cashReducer,
    customers: customerReducer,
    category: categoryReducer
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;