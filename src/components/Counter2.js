import React from 'react'
import store from "../store";
import { bindActionCreators } from "../redux";
import actionCreators from "../store/actionCreators/counter2";

// 把一个 action 创建者对象和 store.dispatch 进行绑定，返回一个新的对象
const boundActions = bindActionCreators(actionCreators, store.dispatch)

function Counter2() {
  let [state, setState] = React.useState(store.getState().counter2.number)
  React.useEffect(() => {
    store.subscribe(() => {
      setState(store.getState().counter2.number)
    })
  }, [])
  return (
    <div>
      <p>{store.getState().counter2.number}</p>
      <button onClick={boundActions.add2}>+</button>
      <button onClick={boundActions.minus2}>-</button>
    </div>
  )
}

export default Counter2

/**
 * 组件和仓库有两种关系
 * 一种输入 组件可以从仓库中读取状态数据进行渲染和显示
 * 一种叫输出 可以在组件派发动作，修改仓库中的状态
 */