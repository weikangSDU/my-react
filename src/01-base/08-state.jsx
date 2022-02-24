import React, { Component } from 'react'

export default class App extends Component {
  // 一种state写法
  // state = {
  //   isShow: true,
  //   count: 0
  // }
  // 另一种state写法
  constructor() {
    super() // 因为是集成，必须要有super
    this.state = {
      isShow: true,
      count: 0
    }
  }
  myRef = React.createRef()
  render() {
    return (
      <div>
        <input type='text' ref={this.myRef} />
        <button onClick={() => { this.setState({isShow: !this.state.isShow}) }}>{this.state.isShow ? '收藏' : '取消收藏'}</button>
        {/* 从下行代码可以看出不实用this.setState,直接修改state的值是改变了的，react不是双向绑定响应式，所以页面才没有更新 */}
        {/* <button onClick={() => { this.state.isShow = !this.state.isShow; console.log(this.state, 'state') }}>测试state的值</button> */}
      </div>
    )
  }
}
