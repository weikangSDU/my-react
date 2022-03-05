/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component,useLayoutEffect } from 'react'

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


function Child (){
    useLayoutEffect(() => {
        window.onresize = ()=>{
            console.log("resize")
        }

        var timer = setInterval(()=>{
            console.log("111")
        },1000)


        return ()=>{
            console.log('组件销毁')

            window.onresize = null
            clearInterval(timer)
        }
    }, [])

    return <div>
        child
    </div>
}
