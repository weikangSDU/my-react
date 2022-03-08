/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <input type="text"/>
                <button onClick={()=>{
                    localStorage.setItem("token","123")
                    this.props.history.push(`/center`)
                }}>登录</button>
            </div>
        )
    }
}
