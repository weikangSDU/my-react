/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
// import Center from './Center'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{background:"yellow",textAlign:"center",overflow:"hidden"}}>
                <button style={{float:"left"}}>back</button>
                <span>卖座电影</span>
                <button style={{float:"right"}} onClick={()=>{
                    this.props.myevent()
                }}>center</button>
            </div>
        )
    }
}
