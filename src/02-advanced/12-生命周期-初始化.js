import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name: 'weikang'
  }
  componentWillMount() {
    // 第一次上树前最后一次修改state的机会了,拿不到真实dom
    console.log('第一次will mount')
    this.setState({
      name: this.state.name.toUpperCase()
    })
  }
  componentDidMount() {
    console.log('第一次did mount')
    // 数据请求axios
    // 订阅函数调用
    // 基于创建的dom结构进行初始化
  }
  render() {
    return (
      <div>{this.state.name}</div>
    )
  }
}
