/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class Tabbar extends Component {
    state= {
        list:[
            {
                id:1,
                text:"电影"
            },
            {
                id:2,
                text:"影院"
            },
            {
                id:3,
                text:"我的"
            }
        ],

        current:this.props.defaultValue
    }
    render() {

        // this.state.current = this.props.parentcurrent

        // this.setState({
        //     current:this.props.parentcurrent
        // })
        return (
            <div>
                <ul>
                    {
                        this.state.list.map( (item,index)=>
                        <li key={item.id} className={this.state.current=== index? 'active':''} onClick={()=>this.handleClick(index)}>{item.text}</li>    
                        )
                    }
                </ul>
            </div>
        )
    }


    handleClick(index){
        console.log(index)

        this.setState({
            current:index
        })


        //通知一下父组件， 改修改父组件那个状态了，


        this.props.myevent(index)
    }
}
