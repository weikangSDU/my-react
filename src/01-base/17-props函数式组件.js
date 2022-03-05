/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

 import React, { Component } from 'react'
 import Navbar from './Navbar'
 import Sidebar from './Sidebar'
 export default class App extends Component {
     render() {
         return (
             <div>
                 {/* 类组件 */}
                 <Navbar title="导航"></Navbar>

                {/* 函数式组件 */}
                 <Sidebar bg="red" position="left"></Sidebar>
             </div>
         )
     }
 }
 