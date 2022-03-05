/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {
    state  = {
        myname:"kerwin"
    }
    render() {
        console.log("render")
        return (
            <div>
                <button onClick={()=>{
                    // this.state.myname = "xiaoming"
                    this.setState({
                        myname:"xiaoming"
                    })
                }}>click</button>

                {this.state.myname}
            </div>
        )
    }
    // scu 性能优化函数
    
    shouldComponentUpdate(nextProps,nextState){
        // return true; //应该更新
        //return false;; //阻止更新
        // this.state  老的状态
        // nextState   新的状态
        if(JSON.stringify(this.state)!== JSON.stringify(nextState)){
            return true
        }

        return false
    }

    UNSAFE_componentWillUpdate(){
        console.log("UNSAFE_componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
}
