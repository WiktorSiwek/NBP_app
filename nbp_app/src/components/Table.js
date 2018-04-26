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
            <tbody>
              <tr style={{height:"50px"}}>
                <td className="w-25">{this.props.col1}</td>
                <td className="w-25">{this.props.col2}</td>
                <td className="w-25">{this.props.col3}</td>
                <td className="w-25">{this.props.col4}</td>
              </tr>
            </tbody>
      )
    }
  }

  export default Table;