/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname:"kerwin"
    }
    UNSAFE_componentWillMount(){

        console.log("第一次will mount",this.state.myname,document.getElementById("myname"))

        // 第一次上树前的 最后一次修改状态机会
        this.setState({
            myname:"Kerwin"
        })

        //初始化数据的作用。
    }
    componentDidMount(){
        console.log("第一次did mount",document.getElementById("myname"))
        // 数据请求axios
        // 订阅函数调用
        // setInterval
        // 基于创建的完的dom进行 初始化，，，，，，BetterScroll
    }

    render() {
        console.log("render")
        return (
            <div>
                <span id="myname">{this.state.myname}</span>
            </div>
        )
    }
}
