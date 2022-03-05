/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        isCreated:true
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        isCreated:!this.state.isCreated
                    })
                }}>click</button>
                {/* {this.state.isCreated?<Child/>:""} */}
                {this.state.isCreated && <Child/>}
            </div>
        )
    }
}

class Child extends Component{
    

    render(){
        return <div>
            child
        </div>
    }

    componentDidMount() {
        window.onresize = ()=>{
            console.log("resize")
        }

        this.timer = setInterval(()=>{
            console.log("111")
        },1000)
    }
    

    componentWillUnmount(){
        console.log("componentWillUnmount")

        window.onresize = null

        clearInterval(this.timer) 
    }
}