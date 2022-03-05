/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'


class Field extends Component{
    render(){
        return <div style={{background:"yellow"}}>
            <label>{this.props.label}</label>
            <input type={this.props.type} onChange={(evt)=>{
                // console.log(evt.target.value)

                this.props.onChangeEvent(evt.target.value)
            }} value={this.props.value}/>
        </div>
    }
}

export default class App extends Component {

    state = {
        username:localStorage.getItem("username"),
        password:""
    }

    render() {
        return (
            <div>
                <h1>登录页面</h1>

                <Field label="用户名" type="text" onChangeEvent={(value)=>{
                    // console.log(value)

                    this.setState({
                        username:value
                    })
                }} value={this.state.username}/>
                <Field label="密码" type="password" onChangeEvent={(value)=>{
                    
                    this.setState({
                        password:value
                    })
                }} value={this.state.password}/>

                <button onClick={()=>{
                    console.log(this.state.username,this.state.password,'发送后端验证')
                }}>登录</button>
                <button onClick={()=>{
                    this.setState({
                        username:"",
                        password:""
                    })
                }}>取消</button>
            </div>
        )
    }
}
