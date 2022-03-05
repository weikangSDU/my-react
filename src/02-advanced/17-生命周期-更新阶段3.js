/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'


class Child extends Component{

    state  ={
        title:""
    }
    render(){
    return <div>child-{this.state.title}</div>
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps",nextProps)

        // 最先获得父组件传来的属性， 可以利用属性进行ajax或者逻辑处理。
        // 把属性转化成孩子自己的状态。

        this.setState({
            title:nextProps.text+"kerwin"
        })
    }
}

export default class App extends Component {
    state = {
        text:"11111111111"
    }
    render() {
        return (
            <div>
                {
                    this.state.text
                }
                <button onClick={()=>{
                    this.setState({
                        text:"222222222222"
                    })
                }}>click</button>
                <Child text={this.state.text}/>
            </div>
        )
    }
}
