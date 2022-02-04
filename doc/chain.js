function compose(...funcs) {
  if (funcs.length === 0) {
    return args => args
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

// 日志中间件
let logger1 = (store) => next => action => {
  console.log('logger1')
  next(action)
}
let logger2 = (store) => next => action => {
  console.log('logger2')
  next(action)
}
let logger3 = (store) => next => action => {
  console.log('logger3')
  next(action)
}

let store = {dispatch() {
    console.log('原生的dispatch')
}}
logger1 = logger1(store)
logger2 = logger2(store)
logger3 = logger3(store)

let composed = compose(logger1, logger2, logger3)
let newDispatch = composed(store.dispatch)
newDispatch({ type: 'ADD' })