import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
      local: "bn-BD",
    };
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = () => {
    this.setState({ local: "en-US" });
  };

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    const { time, local } = this.state;
    return (
      <div>
        <h1>Clock Component</h1>
        <h2>now {time.toLocaleTimeString(local)}</h2>
        <button type="button" onClick={this.handleClick}>
          {" "}
          click here{" "}
        </button>
      </div>
    );
  }
}
