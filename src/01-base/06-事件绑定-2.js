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
                    console.log("click1","如果处理逻辑过多， 不推荐这种写法",this.a)
                } }>add1</button>

                <button  onClick={ this.handleClick2.bind(this)  }>add2-不推荐这种写法</button>
                <button  onClick={ this.handleClick3  }>add3-推荐</button>
                <button  onClick={ ()=>this.handleClick4() }>add4-比较推荐-传参</button>
            </div>
        )
    }


    handleClick2(){
        console.log("click2",this.a)
    }

    handleClick3 = (evt)=>{
        console.log("click3",this.a,evt.target)
    }

    handleClick4(){
        console.log("click4",this.a)
    }
}

/*
React并不会真正的绑定事件到每一个具体《》的元素上，而是采用事件代理的模式：
*/


/*
  call, 改变this， 自动执行函数
  apply,改变this， 自动执行函数
  bind, 改变this， 不会自动执行函数，手动加括号执行函数
*/

var obj1 = {
    name:"obj1",
    getName(){
        console.log(this.name)
    }
}

var obj2 = {
    name:"obj2",
    getName(){
        console.log(this.name)
    }
}
obj1.getName.bind(obj2)()
// obj2.getName()


// var obtn = document.getElementById("btn")
// obtn.onclick=function(){
//     console.log(this)
// }

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