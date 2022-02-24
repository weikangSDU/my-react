import React, { Component } from 'react'

export default class App extends Component {
  state = {
    todoList: []
  }
  myRef = React.createRef()
  addTodoList = () => {

    const value = this.myRef.current.value
    console.log(value, '输入框的值')
    // 不要直接修改state，下面的写法可以实现但不好
    // this.state.todoList.push(value)
    // this.setState({todoList: this.state.todoList})
    // 还可以用[...this.state.todoList],推荐用JSON.parse(JSON.strify)
    const myList = this.state.todoList.slice()
    myList.push(value)
    this.setState({todoList: myList})
    this.myRef.current.value = ''
  }

  // 写麻烦了,循环的时候直接把index传过来就行

  delTodoItem = (item, event) => {
    console.log(item, event)
    const findIndex = this.state.todoList.findIndex(todo => todo === item)
    if (findIndex > -1) {
      const myList = this.state.todoList.slice()
      myList.splice(findIndex, 1)
      this.setState({todoList: myList})
    }
  }
  render() {
    return (
      <div>
        <div>
          <input type='text' ref={this.myRef}></input>
          <button onClick={()=> {this.addTodoList()}}>add</button>
        </div>
        <div>
          <ul>
            {
              this.state.todoList.map(item => {
                return (
                  <div key={item} style={{display: 'flex'}}>
                    <li>{item}</li>
                    <button onClick={(event) => { this.delTodoItem(item, event) }}>删除</button>
                  </div> 
                )
              })
            }
          </ul>
          {this.state.todoList.length === 0 ? <div>暂无数据</div> : null}
        </div>
      </div>
    )
  }
}
