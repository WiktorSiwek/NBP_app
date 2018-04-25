import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'http://api.nbp.pl/api/exchangerates/tables/C/?format=json';

class AppDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      table: '',
    }
  }

  componentDidMount = () => {
    fetch(API, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {console.log(res[0].rates[0])
        return res}
    )
      .then(res => {
        console.log(res[0].rates)
        // this.setState({
        //   table: res[0].rates.map(r => (
        //   <div>{r.currency}-{r.code}-{r.bid}-{r.ask} </div>
        // ))
        // })
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

  render() {
    return (
      <div>
        {this.state.table}
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
        <form>
          <label htmlFor="amountOfCurriencies">Ile kursów chcesz wyświetlić?</label>
          <input id="amountOfCurriencies" type="text"/>
          <br/>
          <label htmlFor="whichCurrency">Jaka waluta?</label>
          <input id="whichCurrency" type="text"/>
        </form>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AppDashboard />
        <ChooseCurrency />
      </div>
    );
  }
}

export default App;
