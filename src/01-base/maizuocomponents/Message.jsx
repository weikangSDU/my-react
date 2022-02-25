import React, { Component } from 'react'
import axios from 'axios'

export default class Message extends Component {
  constructor() {
    super()
    // axios.get('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7400527').then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    this.state = {
      fileList: []
    }
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7400527',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16457847873914914229911553"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res)
      this.setState({
        fileList: res.data.data.cinemas
      })
    }).catch(err => {
      console.log(err)
    })
  }
  // 一般来说请求数据放在生命周期里，但目前还没有学到这里，所以在构造器中发请求
  render() {
    return (
      <div>
        <ul>
          {
            this.state.fileList.map(item => {
              return <li key={item.cinemaId}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
