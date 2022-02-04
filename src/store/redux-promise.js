function promise({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      // 如果一个对象有 then 属性，并且 then 属性的类型是一个函数
      if (action.then && typeof action.then === 'function') {
        // 执行这个函数，传入 dispatch 和 getState
        action.then(action => dispatch(action)).catch(dispatch)
      } else if (action.payload && typeof action.payload.then === 'function') {
        action.payload  // 如果成功了，则重新派发一个 action, 把 payload 修改为返回的值 1
          .then(result => dispatch({...action, error: true, payload: result}))
          .catch(error => {
            dispatch({...action, payload: error})
            return Promise.reject(error)
          })
      } else {
        return next(action)
      }
    }
  }
}

export default promise