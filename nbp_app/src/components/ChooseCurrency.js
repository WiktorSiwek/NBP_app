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
          <br/>
          <form className="form-group w-75 col-12"
                onSubmit={this.props.handleSubmit}>
            <div className="row">
              <label className="col-sm-6" htmlFor="whichCurrency">Jaka waluta?</label>
              <input type="text" 
                    value={this.props.whichOne} 
                    onChange={this.props.handleWhichOne} 
                    id="whichCurrency"
                    className="form-control-sm col-sm-6" />
            </div>
            <br/>
            <div className="row">
              <label className="col-sm-6" htmlFor="amountOfCurriencies">Ile kursów chcesz wyświetlić?</label>
              <input value={this.props.howMany} 
                    onChange={this.props.handleHowMany} 
                    id="amountOfCurriencies" 
                    type="number"
                    className="form-control-sm col-sm-6" />
              <button type="submit" style={{ display: "none"}}></button>
            </div>
          </form>
        </div>
      )
    }
  }

  export default ChooseCurrency;
  