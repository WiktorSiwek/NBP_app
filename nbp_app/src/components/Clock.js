import React, { Component } from 'react';
import '../App.css';
import axios from '../../node_modules/axios'
import ChooseCurrency from './ChooseCurrency'
import Header from './Header'
import ReturnButton from './ReturnButton'
import Table from './Table'
import App from '../App'

class Clock extends Component {
    state = {
      time: new Date().toLocaleTimeString(),
    };
  
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
  
    tick() {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }
  
    render() {
      return (
        <div>
          <p className="font-weight-bold" style={{fontSize: "30px"}}>{this.state.time}</p>
        </div>
      )
    }
  }

  export default Clock;