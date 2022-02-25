import React, { Component } from 'react'
import BScroll from '@better-scroll/core'

export default class BetterScroll extends Component {
  state = {
    list: []
  }
  add() {
    // 同步操作，所以setState是异步。对改变后的数据操作就需要在回调中进行
    // 对于像案例数据请求promise.then这样的异步操作，可以直接跟在setState后面，当然放进回调也可以
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 111, 1111, 234, 4465, 65487]
    this.setState({
      list: list
    }, () => {
      let wrapper = document.querySelector('.wrapper')
      new BScroll(wrapper)
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => { this.add() }}>add</button>
        <div className='wrapper' style={{ height: '200px', background: 'red', overflow: 'hidden' }}>
          <ul>
            {
              this.state.list.map(item => {
                return <li key={item}>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
