/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return <div style={{background:"red"}}>
            {this.props.children}
            <span>navbar</span>
        </div>
    }
}
class Sidebar extends Component{
    render(){
        return <div style={{background:"yellow",width:"200px"}}> 
            <ul>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
            </ul>
        </div>
    }
}

export default class App extends Component {
    state = {
        isShow:false
    }

  
    render() {
        return (
            <div>
                <Navbar>
                    <button onClick={()=>{
                        this.setState({
                            isShow:!this.state.isShow
                        })
                    }}>click</button>
                </Navbar>
                
                {this.state.isShow && <Sidebar/>}
            </div>
        )
    }
}

/*
父传子 ：属性，
子传父： 回调函数 callback
*/
