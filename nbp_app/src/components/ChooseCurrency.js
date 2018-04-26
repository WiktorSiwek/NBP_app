import React, { Component } from 'react';
import '../App.css';
import axios from '../../node_modules/axios'
import Clock from './Clock'
import Header from './Header'
import ReturnButton from './ReturnButton'
import Table from './Table'
import App from '../App'

class ChooseCurrency extends Component {

    render() {
      return (
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <label htmlFor="amountOfCurriencies">Ile kursów chcesz wyświetlić?</label>
            <input value={this.props.howMany} 
                   onChange={this.props.handleHowMany} 
                   id="amountOfCurriencies" 
                   type="number"/>
            <br/>
            <label htmlFor="whichCurrency">Jaka waluta?</label>
            <input type="text" 
                   value={this.props.whichOne} 
                   onChange={this.props.handleWhichOne} 
                   id="whichCurrency" />
            <button type="submit" style={{ display: "none"}}></button>
          </form>
        </div>
      )
    }
  }

  export default ChooseCurrency;
  