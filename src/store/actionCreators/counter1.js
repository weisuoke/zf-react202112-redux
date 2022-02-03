import * as actionType from "../action-types";

function add() {
  return { type: actionType.ADD }
}

function minus() {
  return { type: actionType.MINUS }
}

const actionCreators = { add, minus }

export default actionCreators