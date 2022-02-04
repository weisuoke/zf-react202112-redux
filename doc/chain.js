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
let logger1 = next => action => {
  console.log('logger1')
  next(action)
}
let logger2 = next => action => {
  console.log('logger2')
  next(action)
}
let logger3 = next => action => {
  console.log('logger3')
  next(action)
}

let store = {dispatch() {
    console.log('原生的dispatch')
}}
// let composed = compose(logger1, logger2, logger3)

function composed (oldDispatch) {
  let logger3Next = logger3(oldDispatch)
  let logger2Next = logger2(logger3Next)
  let newDispatch = logger1(logger2Next)
  return newDispatch
}
let newDispatch = composed(store.dispatch)
newDispatch({ type: 'ADD' })