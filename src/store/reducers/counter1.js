import * as actionType from "../action-types";

/**
 * 状态计算器
 * @param state 老状态
 * @param action 动作 必须有一个type属性
 */
function counter1(state = {number: 0}, action) {
  switch (action.type) {
    case actionType.ADD:
      return { number: state.number + (action?.payload?.amount || 1) }
    case actionType.MINUS:
      return { number: state.number - 1 }
    default:
      return state
  }
}

export default counter1