import { createStore } from './redux'
const counterValue = document.getElementById('counter-value')
const addBtn = document.getElementById('add-btn')
const minusBtn = document.getElementById('minus-btn')
const ADD = 'ADD'
const MINUS = 'MINUS'

/**
 * 状态计算器
 * @param state 老状态
 * @param action 动作 必须有一个type属性
 */
function reducer(state, action) {
  switch (action.type) {
    case ADD:
      return { number: state.number + 1 }
    case MINUS:
      return { number: state.number - 1 }
    default:
      return state
  }
}

let store = createStore(reducer, { number: 0 });

function render() {
  counterValue.innerHTML = store.getState().number + ''
}

render()
store.subscribe(render)
addBtn.addEventListener('click', () => {
  store.dispatch({type: ADD})
})
minusBtn.addEventListener('click', () => {
  store.dispatch({type: MINUS})
})