/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        mytext:"111111"
    }
    render() {
        console.log("render")
        return (
            <div>
                app
                <button onClick={()=>{
                    this.setState({
                        mytext:"222222"
                    })
                }}>click</button>
                {this.state.mytext}
            </div>
        )
    }

    // componentWillUpdate(){
    //     console.log("componentWillUpdate")
    // }

    componentDidUpdate(prevProps,prevState,value){
        console.log("componentDidUpdate",value)
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
        return 100;
    }
}
