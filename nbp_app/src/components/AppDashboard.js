import React, { Component } from 'react';
import '../App.css';
import axios from '../../node_modules/axios'
import ChooseCurrency from './ChooseCurrency'
import Clock from './Clock'
import Header from './Header'
import ReturnButton from './ReturnButton'
import Table from './Table'
import App from '../App'

const API_WHOLE = 'http://api.nbp.pl/api/exchangerates/tables/C/?format=json';
const API_SINGLE = 'http://api.nbp.pl/api/exchangerates/rates/C/'

class AppDashboard extends Component {

    constructor(props) {
      super(props);
      this.state = {
        howMany: '',
        whichOne: '',
        singleCurrencyMode: false,
        col1Header: "Nazwa waluty",
        col2Header: "Skrót"
      }
    }
  
    componentWillMount = () => {
      this.fetching(API_WHOLE).then(res => {
        this.settingWhole(res);
      });
    };
  
    fetching = API => {
      return fetch(API, {
        method: "GET"
      }).then(res => res.json());
    };
  
    settingWhole = (res) => {
      this.setState({
        table: res[0].rates.map(el => {
          return (
            <Table col1={el.currency}
                   col2={el.code} 
                   col3={el.ask}
                   col4={el.bid} />
                 )
        })
      })
    }
  
    settingSingle = (res) => {
      this.setState({
        table: res.rates.map(el => {
          return ( 
            <Table col1={el.no}
                   col2={el.effectiveDate} 
                   col3={el.ask}
                   col4={el.bid} />
                 )
        }),
        singleCurrencyMode: true
      })
    }
  
    changeHeaders = () => {
      this.setState({
        col1Header: this.state.singleCurrencyMode ? "Kod zmiany" : "Nazwa waluty",
        col2Header: this.state.singleCurrencyMode ? "Data stanu" : "Skrót"
      })
    }
  
    handleSubmit = e => {
      e.preventDefault();
      this.fetching(`${API_SINGLE}${this.state.whichOne}/last/${this.state.howMany}/`)
        .then(res => {
          this.settingSingle(res);
        })
        .then(this.changeHeaders);
    };
  
    handleHowMany = (e) => {
      this.setState({
        howMany: e.target.value
      })
      console.log("amount")
    }
  
    handleWhichOne = (e) => {
      this.setState({
        whichOne: e.target.value
      })
      console.log("which")
    }
  
    handleReturn = () => {
      this.fetching(API_WHOLE).then(res => {
        this.settingWhole(res);
      });
    }
  
    render() {
      return (
        <div>
          <Clock />
          <Header col1={this.state.col1Header}
                  col2={this.state.col2Header} />
          {this.state.table}
          <ChooseCurrency 
            handleSubmit={this.handleSubmit}
            handleHowMany={this.handleHowMany}
            handleWhichOne={this.handleWhichOne}
            howMany={this.state.howMany}
            whichOne={this.state.whichOne} />
            <ReturnButton state={this.state.singleCurrencyMode}
                          handleReturn={this.handleReturn}/>
        </div>
      )
    }
  }

  export default AppDashboard;