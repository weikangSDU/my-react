import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 类组件传参 */}
        <Navbar title='123'></Navbar>
        {/* 函数组件传参 */}
        <Sidebar bg='yellow'></Sidebar>
      </div>
    )
  }
}
