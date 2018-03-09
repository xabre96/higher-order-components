import React from 'react';

const Label = (props) => {
  return (
    <label onMouseMove={props.incrementCount} onClick={props.incrementCountByTwo}>Count: {props.count}</label>
  );
}

export default Label;