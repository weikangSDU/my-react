/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communination.css'


//调度中心
var bus = {

    list:[],
    //订阅
    subscribe(callback){
        // console.log(callback)

        this.list.push(callback)
    },

    //发布
    publish(text){
        //遍历所有的list， 将回调函数执行
        // console.log(this.list)

        this.list.forEach(callback=>{
            callback && callback(text)
        })
    }
}



export default class App extends Component {

    constructor(){
        super()
        this.state = {
            filmList:[],
        }
        axios.get(`/test.json`).then(res=>{
            console.log(res.data.data.films)
            this.setState({
                filmList:res.data.data.films
            })
        })
    }

    render() {
        return (
            <div>
                {/* {this.state.info} */}
                {
                    this.state.filmList.map(item=>
                        <FilmItem key={item.filmId} {...item} ></FilmItem>    
                    )
                }


                <FilmDetail ></FilmDetail>
            </div>
        )
    }
}

/*受控组件*/
class FilmItem extends Component{
    render(){
        // console.log(this.props)
        let {name, poster,grade,synopsis}  = this.props
        return <div className="filmitem" onClick={()=>{
            // console.log(synopsis)

            bus.publish(synopsis)
        }}>
            <img src={poster} alt={name}/>
            <h4>{name}</h4>
            <div>观众评分：{grade}</div>
        </div>
    }
}

class FilmDetail extends Component{


    constructor(){
        super()
        this.state = {
            info:""
        }
        bus.subscribe((info)=>{
            console.log("我再filmDetail中定义",info)

            this.setState({
                info:info
            })
        })
    }

    render(){
        return <div className="filmdetail">
            {this.state.info}
        </div>
    }
}