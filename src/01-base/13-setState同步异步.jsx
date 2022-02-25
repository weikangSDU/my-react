import React, { Component } from 'react'

/**
 * setState 处在同步的逻辑中，异步更新状态，更新真实dom（如果想知道什么时候更新完，
 * 或者就是用更新后的数据，setState第二个参数.状态和dom更新后会被触发）
 * setState 处在异步的逻辑中，同步更新状态，同步更新真实dom
 */
export default class App extends Component {
  state = {
    count: 0
  }
  handleAdd1 = () => {
    this.setState({
      count: this.state.count + 1
    },() => {
      console.log(this.state.count, '回调中')
    })
    console.log(1, this.state.count)
    this.setState({
      count: this.state.count + 1
    })
    console.log(1, this.state.count)
    this.setState({
      count: this.state.count + 1
    })
    console.log(1, this.state.count)
  }
  handleAdd2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log(2, this.state.count)
      this.setState({
        count: this.state.count + 1
      })
      console.log(2, this.state.count)
      this.setState({
        count: this.state.count + 1
      })
      console.log(2, this.state.count)
    }, 1)
  }
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handleAdd1}>add1</button>
        <button onClick={this.handleAdd2}>add2</button>
      </div>
    )
  }
}
