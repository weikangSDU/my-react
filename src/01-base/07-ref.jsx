import React, { Component } from 'react'

export default class App extends Component {
  a = 100
  myRef = React.createRef()
  render() {
    return (
      <div>
          {/* <input ref='myRef' /> */}
          <input ref={this.myRef} />
          {/* <button onClick={() => {console.log('add1', this.a)}}>add1</button>
          <button onClick={ this.handleClick2.bind(this) }>add2</button>
          <button onClick={ this.handleClick3 }>add3</button> */}
          <button onClick={ () => this.handleClick4() }>add4</button>
          {/* <button onClick={ () => this.handleClick5() }>add5</button> */}
      </div>
    )
  }

  handleClick2() {
      console.log('click2', this.a)
  }

  handleClick3 = () => {
    console.log('click3', this.a)
  }

  handleClick4 = () => {
    //   console.log(this.refs.myRef.value)
    console.log(this.myRef.current.value)
      console.log('click4', this.a)
  }

  handleClick5() {
    console.log('click5', this.a)
  }
}