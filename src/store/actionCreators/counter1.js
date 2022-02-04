import * as actionType from "../action-types";

function add() {
  return { type: actionType.ADD }
}

function minus() {
  return { type: actionType.MINUS }
}

function thunk() {
  return function (dispatch, getState) {
    setTimeout(() => {
      dispatch({type: actionType.ADD})
    }, 1000)
  }
}

function promise1Add() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({type: actionType.ADD})
    }, 1000)
  })
}

function promise2Add() {
  return {
    type: actionType.ADD,
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() >.5) {
          resolve({amount: 1})
        } else {
          reject({amount: -5})
        }
      }, 1000)
    })
  }
}

const actionCreators = { add, minus, thunk, promise1Add, promise2Add }

export default actionCreators