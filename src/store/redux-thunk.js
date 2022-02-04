function thunk({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      // 如果说派发的 action 是一个函数的话
      if (typeof action === 'function') {
        // 执行这个函数，传入 dispatch 和 getState
        return action(dispatch, getState)
      } else {
        return next(action)
      }
    }
  }
}

export default thunk