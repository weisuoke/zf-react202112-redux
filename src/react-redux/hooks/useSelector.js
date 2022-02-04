import React from 'react'
import ReactReduxContext from "../ReactReduxContext";

const useSelector = (selector, equalityFn = shallowEqual) => {
  const { store } = React.useContext(ReactReduxContext)
  let state = store.getState()
  let lastSelectedState = React.useRef(null)
  let selectedState = selector(state);
  let [, forceUpdate] = React.useReducer(x => x + 1, 0)
  React.useLayoutEffect(() => {
    return store.subscribe(() => {
      let selectedState = selector(store.getState())
      if (!equalityFn(selectedState, lastSelectedState.current)) {
        forceUpdate()
        lastSelectedState.current = selectedState
      }
    })
  }, [equalityFn, selector, store])
  return selectedState;
}

/**
 * 浅比较两个对象
 * @param obj1 对象1
 * @param obj2 对象2
 */
export function shallowEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  }
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false
  }
  // 如果都是对象，并且属性都是存在的
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false
  }
  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true
}

export default useSelector;