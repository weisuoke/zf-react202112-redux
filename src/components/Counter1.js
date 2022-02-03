import React from 'react'
import store from "../store";
import { bindActionCreators } from "redux";
import actionCreators from "../store/actionCreators/counter1";

// 把一个 action 创建者对象和 store.dispatch 进行绑定，返回一个新的对象
const boundActions = bindActionCreators(actionCreators, store.dispatch)

function Counter1() {
  let [state, setState] = React.useState(store.getState)
  React.useEffect(() => {
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [])
  return (
    <div>
      <p>{store.getState().number}</p>
      <button onClick={boundActions.add}>+</button>
      <button onClick={boundActions.minus}>-</button>
    </div>
  )
}

export default Counter1

/**
 * 组件和仓库有两种关系
 * 一种输入 组件可以从仓库中读取状态数据进行渲染和显示
 * 一种叫输出 可以在组件派发动作，修改仓库中的状态
 */