import * as actionType from "../action-types";

/**
 * 状态计算器
 * @param state 老状态
 * @param action 动作 必须有一个type属性
 */
function counter2(state = {number: 0}, action) {
  switch (action.type) {
    case actionType.ADD2:
      return { number: state.number + 1 }
    case actionType.MINUS2:
      return { number: state.number - 1 }
    default:
      return state
  }
}

export default counter2