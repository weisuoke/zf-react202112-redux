import React from 'react'
import actionCreators from "../store/actionCreators/counter2";
import {connect} from "../react-redux";

class Counter2 extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add2}>+</button>
        <button onClick={this.props.minus2}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.counter2;  // {number: 0}

// 把仓库中的状态映射为此组件的属性对象
export default connect(mapStateToProps, actionCreators)(Counter2)
