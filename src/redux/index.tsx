import { createStore, combineReducers } from "redux";
import { reducerList } from "./reducerList";
import { reducerCounter } from "./reducerCounter";

const rootReducer = combineReducers({
	list: reducerList,
	counter: reducerCounter,
});

export const store = createStore(rootReducer);
