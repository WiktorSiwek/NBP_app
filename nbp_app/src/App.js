import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from '../node_modules/axios'

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
        return (<Table col1={el.currency}
                       col2={el.code} 
                       col3={el.ask}
                       col4={el.bid} />)
      })
    })
  }

  settingSingle = (res) => {
    this.setState({
      table: res.rates.map(el => {
        return(
        <table>
          <tbody>
            <tr>
              <td>{el.no}</td>
              <td>{el.effectiveDate}</td>
              <td>{el.bid}</td>
              <td>{el.ask}</td>
            </tr>
          </tbody>
        </table>
        )
      }),
      singleCurrencyMode: true
    })
  }

  changeHeaders = () => {
    this.setState({
      col1: this.state.singleCurrencyMode ? "Kod zmiany" : "Nazwa waluty",
      col3: this.state.singleCurrencyMode ? "Data stanu" : "Skrót"
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

class Header extends Component {
  render() {
    return (
      <div>
        <table style={{fontWeight: "bold"}}>
          <tbody>
            <tr>
              <td>{this.props.col1}</td>
              <td>{this.props.col2}</td>
              <td>Cena sprzedaży</td>
              <td>Cena kupna</td>
            </tr>
          </tbody>
        </table> 
      </div>
    )
  }
}

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

class ReturnButton extends Component {
  render() {
    return (
      <div>
        {
          (this.props.state)
            ? <button onClick={this.props.handleReturn}>Powrót do listy walut</button> 
            : <span></span>
        }

      </div>
    )
  }
}

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{this.props.col1}</td>
              <td>{this.props.col2}</td>
              <td>{this.props.col3}</td>
              <td>{this.props.col4}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <AppDashboard />
      </div>
    );
  }
}

export default App;
