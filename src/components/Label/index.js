import React, { Component } from 'react';

const Label = (props) => {
  return (
    <label onMouseMove={props.incrementCount}>Count: {props.count}</label>
  );
}

export default Label;