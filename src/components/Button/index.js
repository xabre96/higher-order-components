import React, { Component } from 'react';
// import Increment from '../../hoc/Increment';
//
// const Button = (props) => {
//   return (
//     <button onClick={props.incrementCount}>Count: {props.count}</button>
//   );
// }

class Button extends Component {
  state = {
    count: 0,
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <button onClick={this.incrementCount}>Count: {this.state.count}</button>
    );
  }
}

export default Button;