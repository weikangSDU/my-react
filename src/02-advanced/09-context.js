/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communination.css'
const GlobalContext = React.createContext()
export default class App extends Component {

  constructor() {
    super()
    this.state = {
      filmList: [],
      info: ""
    }
    axios.get(`/test.json`).then(res => {
      console.log(res.data.data.films)
      this.setState({
        filmList: res.data.data.films
      })
    })
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        info: this.state.info,
        changeInfo: (info) => {
          this.setState({
            info: info
          })
        }
      }}>
        <div>
          {/* {this.state.info} */}
          {
            this.state.filmList.map(item =>
              <FilmItem key={item.filmId} {...item} onEvent={(value) => {
                // console.log("父组件接受",value)

                this.setState({
                  info: value
                })
              }}></FilmItem>
            )
          }


          <FilmDetail info={this.state.info}></FilmDetail>
        </div>
      </GlobalContext.Provider>
    )
  }
}

/*受控组件*/
class FilmItem extends Component {
  render() {
    // console.log(this.props)
    let { name, poster, grade, synopsis } = this.props
    return (
      <GlobalContext.Consumer>
        {
          (value) => {
            return <div className="filmitem" onClick={() => {
              // console.log(synopsis)
              // this.props.onEvent(synopsis)
              value.changeInfo(synopsis)
            }}>
              <img src={poster} alt={name} />
              <h4>{name}</h4>
              <div>观众评分：{grade}</div>
            </div>
          }
        }
      </GlobalContext.Consumer>
    )
  }
}

class FilmDetail extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {
          (value) => {
            return (
              <div className="filmdetail">
                {value.info}
              </div>
            )
          }
        }
      </GlobalContext.Consumer>
    )
  }
}