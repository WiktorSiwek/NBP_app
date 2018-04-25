import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'http://api.nbp.pl/api/exchangerates/tables/C/?format=json';

class AppDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      table: '',
      howMany: '',
      whichOne: ''
    }
  }

  componentDidMount = () => {
    fetch(API, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          table: res[0].rates.map(el => {
            return(
            <tbody>
              <tr>
                <td>{el.currency}</td>
                <td>{el.code}</td>
                <td>{el.bid}</td>
                <td>{el.ask}</td>
              </tr>
            </tbody>
            )
          })
        })
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited!")
  }

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

  render() {
    return (
      <div>
        <Header />
        {this.state.table}
        <ChooseCurrency 
          handleSubmit={this.handleSubmit}
          handleHowMany={this.handleHowMany}
          handleWhichOne={this.handleWhichOne}
          howMany={this.state.howMany}
          whichOne={this.state.whichOne} />
      </div>
    )
  }
}

const Header = () => {
  return (
    <div>
      <tbody style={{fontWeight: "bold"}}>
        <tr>
          <td>Nazwa waluty</td>
          <td>Skrót</td>
          <td>Cena sprzedaży</td>
          <td>Cena kupna</td>
        </tr>
      </tbody> 
    </div>
  )
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
