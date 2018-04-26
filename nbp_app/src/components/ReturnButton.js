import React, { Component } from 'react';
import '../App.css';
import axios from '../../node_modules/axios'
import ChooseCurrency from './ChooseCurrency'
import Clock from './Clock'
import Header from './Header'
import Table from './Table'
import App from '../App'

class ReturnButton extends Component {
    render() {
      return (
        <div className="btn">
          {
            (this.props.state)
              ? <button onClick={this.props.handleReturn}>Powrót do listy walut</button> 
              : <span></span>
          }
  
        </div>
      )
    }
  }

  export default ReturnButton;