import React, { Component } from 'react'

class Siderbar extends Component {
  render() {
    return (
      <div>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
      </div>
    )
  }
}

class Navbar extends Component {
  render() {
    return (
      <button onClick={() => {
        this.props.event()
      }}>click</button>
    )
  }
}

export default class App extends Component {
  state = {
    isShow: false
  }
  render() {
    return (
      <div>
        <Navbar event={() => {
          this.setState({
            isShow: !this.state.isShow
          })
        }} />
        {this.state.isShow && <Siderbar />}
      </div>
    )
  }
}
