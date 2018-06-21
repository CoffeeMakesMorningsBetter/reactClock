import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = this.getTime()
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount(){
    if(this.timeout) {
      clearTimeout(this.timeout)
    }
  }

  setTimer() {
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
    }
  }
  render(){
    const {hours, minutes, seconds, ampm} = this.state
    return (
      <div className="clock ">
        {hours === 0 ? 12 :
          (hours > 12) ?
          hours - 12 : hours
        }:{
          minutes > 9 ? minutes: `0${minutes}`
        }:{
          seconds > 9 ? seconds: `0${seconds}`
        } {ampm}
      </div>
    )
  }
}

export default App;
