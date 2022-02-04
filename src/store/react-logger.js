// 实现一个日志中间件，中间件的结构都是定死
function logger({getState, dispatch}) {
  return function (next) { // 为了实现中间件的级联，调用下一个中间件
    return function (action) {  // 这才就是我们改造后的 dispatch 方法了
      console.log('prev state', getState())
      next(action); // next === store.dispatch。如果你只有一个中间件的话，next就是原始的 store.dispatch(action)
      console.log('next state', getState())
    }
  }
}

export default logger