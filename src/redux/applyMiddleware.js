import compose from './compose'
/**
 * 应用中间件
 * @returns {function(*): function(*, *): *&{dispatch: *}}
 * @param middleWares
 */
function applyMiddleware(...middleWares) {
  return function(createStore) {
    return function(reducer, preloadedState) {
      // 创建原始的仓库 store.dispatch 是改造前的 dispatch
      let store = createStore(reducer)
      // 定义一个新的，改造后的 dispatch 函数，此时它的值是 undefined.
      // 是改造后的 dispatch
      let dispatch;
      // getState
      let middlewareAPI = {
        getState: store.getState,
        dispatch: action => dispatch(action)  // *****
      }
      // 先把所有的中间件执行一次，把外层的 store 用 middlewareAPI 去掉
      let chain = middleWares.map(middleWare => middleWare(middlewareAPI))
      // 把这些中间件进行组合，得到一个新的函数
      dispatch = compose(...chain)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}

export default applyMiddleware