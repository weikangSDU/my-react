/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {
    a = 100

    render() {
        return (
            <div>
                <input />
                <button  onClick={ ()=>{
                    console.log("click1","如果处理逻辑过多， 不推荐这种写法")
                } }>add1</button>

                <button  onClick={ this.handleClick2  }>add2</button>
                <button  onClick={ this.handleClick3  }>add3</button>
                <button  onClick={ ()=>{
                    this.handleClick4() // 比较推荐
                }  }>add4</button>
            </div>
        )
    }


    handleClick2(){
        console.log("click2")
    }

    handleClick3 = ()=>{
        console.log("click3")
    }

    handleClick4 = ()=>{
        console.log("click4")
    }
}

// class A{
//     constructor(){
//         this.a="111"
//         this.b="222"
//     }

//     c = 33333


//     d = ()=>{

//     }

//     aaa(){

//     }

//     bbb(){
//         this.ccc();
//     }


//     ccc(){

//     }
// }

// console.log(new A())