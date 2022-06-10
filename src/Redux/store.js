import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducer/userreducer";

const rootReducer= combineReducers({
userList:userReducer,
})

const initialState= {}

const middlewarwe=[thunk]

const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middlewarwe)))

export default store; 