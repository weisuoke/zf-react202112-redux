function applyMiddleware(logger) {
  return function(createStore) {
    return function(reducer, preloadedState) {
      let store = createStore(reducer)
      let dispatch = logger(store)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}

export default applyMiddleware