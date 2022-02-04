function add1(str) {
  return '1' + str
}

function add2(str) {
  return '2' + str
}

function add3(str) {
  return '3' + str
}

// function compose(...funcs) {
//   return function (args) {
//     for(let i = funcs.length - 1; i >= 0; i--) {
//       args = funcs[i](args)
//     }
//     return args
//   }
// }

function compose(...funcs) {
  if (funcs.length === 0) {
    return args => args
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

let fn = compose(add3, add2, add1);
let result = fn('zhufneg')

console.log(result)