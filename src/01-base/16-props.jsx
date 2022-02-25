import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {
  render() {
    const obj = {
      title: 'test',
      leftShow: false
    }
    return (
      <div>
        <h2>首页</h2>
        <Navbar title='首页' leftShow={false} />
        <h2>列表</h2>
        <Navbar title='列表' />
        <h2>购物车</h2>
        <Navbar title='购物车' />
        <Navbar {...obj} a='100' />
      </div>
    )
  }
}
