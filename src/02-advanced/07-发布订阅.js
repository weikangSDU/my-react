import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>07-发布订阅</div>
    )
  }
}


var bus = {
  list: [],
  subscribe(callback) {
    this.list.push(callback)
  },
  publish(text) {
    this.list.map(callback => {
      return callback && callback(text)
    })
  }
}
bus.subscribe((text) => {
  console.log(text)
})
bus.subscribe((text) => {
  console.log(text)
})
bus.publish('shuju')