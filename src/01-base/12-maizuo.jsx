import React, { Component } from 'react'
import './css/02-index.css'
import Movie from './maizuocomponents/Movie'
import Message from './maizuocomponents/Message'
import Info from './maizuocomponents/Info'

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: '电影'
      },
      {
        id: 2,
        text: '信息'
      },
      {
        id: 3,
        text: '我的'
      }
    ],
    current: 0
  }
  render() {
    return (
      <div>
        {
          this.showSwitchPage()
        }
        <ul className='title' style={{ height: '40px' }}>
          {
            this.state.list.map((item, index) => {
              return <li key={item.id} onClick={() => {
                this.setState({
                  current: index
                })
              }} className={this.state.current === index ? 'active' : ''} >{item.text}</li>
            })
          }
        </ul>
      </div>
    )
  }

  showSwitchPage = () => {
    if (this.state.current === 0) {
      return <Movie></Movie>
    } else if (this.state.current === 1) {
      return <Message />
    } else if (this.state.current === 2) {
      return <Info />
    }
  }
}
