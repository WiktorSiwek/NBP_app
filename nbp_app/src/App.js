import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'http://api.nbp.pl/api/exchangerates/tables/C/?format=json';

class AppDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      table: [],
    }
  }

  componentDidMount = () => {
    fetch(API, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          table: this.state.table.concat(res[0].rates)
        })
        console.log(this.state.table)
      })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <AppDashboard />
    );
  }
}

export default App;
