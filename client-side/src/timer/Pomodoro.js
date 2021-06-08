/* eslint-disable no-self-assign */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
export default class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: this.props.minutes,
      seconds: this.props.seconds,
      isStarted: false,
    };

    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }
  tick() {
    let newMinutes = this.state.minutes,
      newSeconds = this.state.seconds - 1;

    if (newSeconds < 0) {
      newMinutes--;
      if (newMinutes < 0) {
        this.reset();
        return;
      }
      newSeconds = 59;
    }

    this.setState({
      minutes: newMinutes,
      seconds: newSeconds,
    });
  }
  start() {
    this.interval = setInterval(this.tick, 1000);
    this.setState({ isStarted: true });
  }
  pause() {
    clearInterval(this.interval);
    this.setState({
      isStarted: false,
    });
  }
  reset() {
    this.pause();
    this.setState({
      minutes: this.props.minutes,
      seconds: this.props.seconds,
    });
  }
  render() {
    return (
      <div className="pomodoro">
        <div className="header-text">30 Minute Focus</div>
        <h1>
          {this.state.minutes} : {this.state.seconds}
        </h1>
        <button onClick={this.state.isStarted ? this.pause : this.start}>
          {this.state.isStarted ? "Pause" : "Start"}
        </button>{" "}
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

Pomodoro.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

Pomodoro.defaultProps = {
  minutes: 30,
  seconds: "00",
};
