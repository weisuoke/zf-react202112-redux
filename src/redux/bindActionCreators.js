/**
 * 绑定 actionCreator 和 store.dispatch，可以实现自动派发
 * @param actionCreators
 * @param dispatch
 */
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {}

  for (const key in actionCreators) {
    const actionCreator = actionCreators[key]
    boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
  }

  return boundActionCreators
}

function bindActionCreator(actionCreator, dispatch) {
  return function (...args) {
    return dispatch(actionCreator.apply(this, args))
  }
}

export default bindActionCreators