import counter1 from "./counter1";
import counter2 from "./counter2";
import {combineReducers} from "../../redux";

let reducers = {
  counter1,
  counter2,
}
let combinedReducer = combineReducers(reducers)
export default combinedReducer