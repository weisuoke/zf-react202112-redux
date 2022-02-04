import * as actionType from "../action-types";

function add2() {
  return { type: actionType.ADD2 }
}

function minus2() {
  return { type: actionType.MINUS2 }
}

const actionCreators = { add2, minus2 }

export default actionCreators