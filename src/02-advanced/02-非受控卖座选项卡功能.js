/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'
import Tabbar from './maizuocomponent/Tabbar'
import Navbar from './maizuocomponent/Navbar'

export default class App extends Component {
    state = {
        current:1
    }

    which(){
        // return "2222"

        switch (this.state.current){
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>

            default:
                return null
        }
    }

    render() {
        return (
            <div>
                <Navbar myevent={()=>{
                    console.log("navbar-center","告诉tabbar去切换到center组件,高亮？")

                    this.setState({
                        current:2
                    })
                }}/>
                {/* {
                    this.state.current===0 && <Film></Film>
                }
                {
                    this.state.current===1 && <Cinema></Cinema>
                }
                {
                    this.state.current===2 && <Center></Center>
                } */}

                {
                    //表达式--支持函数表达式
                    this.which()
                }
                <Tabbar myevent={
                    (index)=>{
                        console.log("父组件定义",index)

                        this.setState({
                            current:index
                        })
                    }
                } defaultValue={this.state.current}></Tabbar>
            </div>)
    }
}
