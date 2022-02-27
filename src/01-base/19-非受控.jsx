import React, { Component } from 'react'

export default class App extends Component {
  username = React.createRef()
  render() {
    return (
      <div>
        <h1>登录页</h1>
        <input type='text' ref={this.username} defaultValue='test' />
        <button onClick={() => {
          console.log(this.username.current.value)
        }}>登录</button>
      </div>
    )
  }
}
