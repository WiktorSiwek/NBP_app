import React, { Component } from 'react';
import '../App.css';
import axios from '../../node_modules/axios'
import ChooseCurrency from './ChooseCurrency'
import Clock from './Clock'
import Header from './Header'
import ReturnButton from './ReturnButton'
import App from '../App'

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

  export default Table;