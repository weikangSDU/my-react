/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {
    // myusername = React.createRef()

    state = {
        username:"kerwin"
    }
    render() {
        return (
            <div>
                <h1>登录页</h1>
                <input type="text" value={this.state.username} onChange={(evt)=>{
                    console.log("onChange",evt.target.value)

                    this.setState({
                        username:evt.target.value
                    })
                }}/>

                <button onClick={()=>{
                    console.log(this.state.username)
                }}>登录</button>
                <button onClick={()=>{

                    this.setState({
                        username:""
                    })
                }}>重置</button>


                {/* <Child myvalue={this.state.username}/> */}
            </div>
        )
    }
}
