/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export default class TemperatureInput extends Component {
  state = { temperature: '' };

  onChangeHandler = (e) => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    const { temperature } = this.state;
    const { scale } = this.props;
    return (
      <>
        <fieldset>
          <legend>
            Input temperature in
            {' '}
            {scaleName[scale]}
            :
          </legend>
          <input
            type="text"
            name=""
            id=""
            value={temperature}
            onChange={this.onChangeHandler}
          />
        </fieldset>
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </>
    );
  }
}
