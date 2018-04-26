import React, { Component } from 'react';
import '../App.css';
import axios from '../../node_modules/axios'
import ChooseCurrency from './ChooseCurrency'
import Clock from './Clock'
import ReturnButton from './ReturnButton'
import Table from './Table'
import App from '../App'

class Header extends Component {
    render() {
      return (
            <tbody style={{backgroundColor:"#ccc", fontWeight: "bold", fontSize: "15px"}}>
              <tr>
                <td>{this.props.col1}</td>
                <td>{this.props.col2}</td>
                <td>Cena sprzedaży</td>
                <td>Cena kupna</td>
              </tr>
            </tbody>
      )
    }
  }

  export default Header;