import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from '../node_modules/axios'
import AppDashboard from './components/AppDashboard'

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
