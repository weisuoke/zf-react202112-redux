import {applyMiddleware, createStore} from "../redux";
import combinedReducer from "./reducers";
import logger1 from "./react-logger1";
import logger2 from "./react-logger2";
import logger3 from "./react-logger3";

let store = applyMiddleware(logger1, logger2, logger3)(createStore)(combinedReducer)

// 实现日志功能，重写store.dispatch
// let dispatch = store.dispatch;
// store.dispatch = function (action) {
//   console.log('prev state', store.getState())
//   dispatch(action); // 调用原生的 dispatch 方法修改状态
//   console.log('next state', store.getState())
// }

// 实现异步操作
// store.dispatch = function (action) {
//   setTimeout(() => {
//     dispatch(action);
//   }, 1000);
// }

export default store
