import { createStore } from "../redux";
import * as actionType from './action-types'

/**
 * 状态计算器
 * @param state 老状态
 * @param action 动作 必须有一个type属性
 */
function reducer(state, action) {
  switch (action.type) {
    case actionType.ADD:
      return { number: state.number + 1 }
    case actionType.MINUS:
      return { number: state.number - 1 }
    default:
      return state
  }
}

let store = createStore(reducer, { number: 0 });
window.store = store;
export default store
