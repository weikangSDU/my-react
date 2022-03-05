/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

import React, { Component } from 'react'
import './css/01-index.css'
export default class App extends Component {
    a = 100
    // myref = React.createRef()

    state = {
        // checklist:[],
        mytext:'',
        list:[{
            id:1,
            mytext:"aaa",
            isChecked:false
        },
        {
            id:2,
            mytext:"bbb",
            isChecked:false
        },
        {
            id:3,
            mytext:"ccc",
            isChecked:false
        }]
    }

    render() {
        return (
            <div>
                {/* <input ref="mytext"/> */}
                <input value={this.state.mytext} onChange={(evt)=>{
                    this.setState({
                        mytext:evt.target.value
                    })
                }}/>

                <button onClick={this.handleClick2}>add2</button>

                <ul>
                    {
                        this.state.list.map( (item,index)=>
                        <li key={item.id}>
                            {/* {item.mytext} */}
                            <input type="checkbox" checked={item.isChecked} onChange={()=>this.handleChecked(index)}/>
                            {/* {item.isChecked?'删除':"不删除"} */}
                            {/* 富文本展示 */}
                            <span dangerouslySetInnerHTML={
                                {
                                    __html:item.mytext
                                }
                            } style={{textDecoration: item.isChecked?"line-through":"" }}></span>
                            {/* <button onClick={this.handleDelClick.bind(this,index)}>del</button> */}

                            
                            <button onClick={()=>this.handleDelClick(index)}>del</button>
                        </li>    
                        )
                    }
                </ul>


                {/* {this.state.list.length===0 ? <div>暂无待办事项</div>:null} */}

                {/* { this.state.list.length===0  && <div>暂无待办事项</div>} */}


                <div className={this.state.list.length===0?'':'hidden'}>暂无待办事项</div>
            </div> )
    }

    handleChecked = (index)=>{
        console.log(index)

        // this.state.list[index].isChecked = !this.state.list[index].isChecked

        let newlist = [...this.state.list]

        newlist[index].isChecked = !newlist[index].isChecked

        this.setState({
            list:newlist
        })
    }

    handleClick2 = ()=>{
        // console.log("click2",this.myref.current.value)

        // this.setState

        // 不要直接修改状态， 可能会造成不可预期的问题。
        // this.state.list.push(this.myref.current.value)

        let newlist = [...this.state.list]
        newlist.push({
            id:Math.random()*100000000, //生成不同id的函数
            mytext:this.state.mytext,
            isChecked:false
        })
        // console.log()
        this.setState({
            list:newlist,
            mytext:""
        })


        //清空输入框
        // this.myref.current.value = ""
    }


    handleDelClick(index){
        console.log("del-click",index)

        // 不要直接修改状态， 可能会造成不可预期的问题。

        let newlist = this.state.list.concat()

        newlist.splice(index,1)

        this.setState({
            list:newlist
        })
    }

}
