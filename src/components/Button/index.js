import React from 'react';

const Button = (props) => {
  return (
    <button onMouseEnter={props.incrementCountByTwo} onClick={props.incrementCount}>
      Count: {props.count}
    </button>
  );
}

export default Button;