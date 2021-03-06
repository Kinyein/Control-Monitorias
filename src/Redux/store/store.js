import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/loginReducers";
import { monitoriasReducer } from "../reducers/monitoriasReducer";
import { monitorReducer } from "../reducers/monitorReducer";
import { registerReducer } from "../reducers/registerReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducer,
    monitores: monitorReducer,
    monitorias: monitoriasReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)