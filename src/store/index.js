import { createStore } from "../redux";
import combinedReducer from "./reducers";

let store = createStore(combinedReducer, { counter1: { number: 0 }, counter2: { number: 0 } });
window.store = store;
export default store
