/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list:[{
            id:1,
            text:"1111"
        },
        {
            id:2,
            text:"2222"
        },
        {
            id:3,
            text:"3333"
        }]
    }

    render() {

        // var newlist = this.state.list.map(item=><li>{item}</li>)
        return (
            <div>
                <ul>
                    {
                        this.state.list.map( (item,index)=>
                            <li key={index}>{item.text}--{index}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
/*
 为了列表的复用和重排， 设置key值， 提高性能

 理想key ,item.id

 不涉及到列表的增加删除 ，重排， 设置成索引没有问题。
*/

/*
 原生js - map
*/

var list= ["aa","bb","cc"]

var newlist = list.map(item=>`<li>${item}</li>`)

console.log(newlist.join(""))

