import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends Component {
  render() {
    return (
      <>
        <TemperatureInput scale="c" />
        <br />
        <br />

        <TemperatureInput scale="f" />
      </>
    );
  }
}
