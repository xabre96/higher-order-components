import React, { Component } from 'react';

const Increment = (WrappedComponent) => {
  return class extends Component {
    state = {
      count: 0,
    };

    incrementCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
}

export default Increment;