import React from "react";
import ReactReduxContext from "./ReactReduxContext";
import { bindActionCreators } from "../redux";

/**
 * 连接组件和仓库
 * @param mapStateToProps 把仓库中的状态变成组件的属性
 * @param mapDispatchToProps 把 dispatch 方法变成组件的属性
 * @returns {function(*): *}
 */
function connect(mapStateToProps, mapDispatchToProps) {
  return function (OldComponent) {
    return class extends React.Component {
      static contextType = ReactReduxContext
      constructor(props, context) {
        super(props);
        const { store } = context;
        const { getState, subscribe, dispatch } = store;
        this.state = mapStateToProps(getState())
        this.dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
      }

      componentDidMount() {
        let store = this.context.store
        this.unsubscribe = store.subscribe(() => {
          this.setState(mapStateToProps(store.getState()))
        })
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <OldComponent {...this.props} {...this.state} {...this.dispatchProps}/>
      }
    }
  }
}

// connect 的函数实现 connect1
function connect1(mapStateToProps, mapDispatchToProps) {
  return function (OldComponent) {
    return function(props) {
      let { store } = React.useContext(ReactReduxContext)
      const { getState, dispatch, subscribe } = store
      const prevState = getState()
      const stateProps = React.useMemo(() => mapStateToProps(prevState), [prevState])
      const dispatchProps = React.useMemo(() => {
        // 其实 mapDispatchToPropsyou多种写法
        if (typeof mapDispatchToProps === 'function') {
          return mapDispatchToProps(dispatch)
        } else if (typeof mapDispatchToProps === 'object' && mapDispatchToProps !== null) {
          return bindActionCreators(mapDispatchToProps, dispatch)
        } else {
          return {
            dispatch
          }
        }
      }, [dispatch])
      const [, forceUpdate] = React.useReducer(x => x + 1, 0);
      React.useLayoutEffect(() => {
        return subscribe(forceUpdate)
      }, [subscribe])
      return <OldComponent {...props} {...stateProps} {...dispatchProps}/>
    }
  }
}

export default connect1