import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import {reducer  as app} from "./App/reducer";

import {reducer as auth} from "./Auth/reducer";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({app, auth});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))