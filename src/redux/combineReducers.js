function combineReducers(reducers) {
  return function(lastState = {}, action) {
    let nextState = {};

    for (let key in reducers) {
      // key 是对象的属性，值是 reducer 函数
      let reducer = reducers[key];
      // 获取老的总状态中此key对应的分状态
      let lastStateForKey = lastState[key]
      // 把此key对应的老得分状态和动作对象传递给老得处理器reducerForKey，计算新的分状态
      let nextStateForKey = reducer(lastStateForKey, action);
      // 把计算的结果再传递给新的总状态的key属性
      nextState[key] = nextStateForKey
    }

    return nextState
  }
}

export default combineReducers