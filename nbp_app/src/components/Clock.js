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
      time: new Date().toLocaleString(),
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
        time: new Date().toLocaleString()
      });
    }
  
    render() {
      return (
        <div>
          <p>{this.state.time}</p>
        </div>
      )
    }
  }

  export default Clock;