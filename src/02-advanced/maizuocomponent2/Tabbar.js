/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
// import React, { Component } from 'react'

// export default class Tabbar extends Component {
//     render() {

//         // this.state.current = this.props.parentcurrent

//         // this.setState({
//         //     current:this.props.parentcurrent
//         // })
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.props.list.map( (item,index)=>
//                         <li key={item.id} className={this.props.current=== index? 'active':''} onClick={()=>this.handleClick(index)}>{item.text}</li>    
//                         )
//                     }
//                 </ul>
//             </div>
//         )
//     }


//     handleClick(index){
//         console.log(index)

//         // this.setState({
//         //     current:index
//         // })


//         //通知一下父组件， 改修改父组件那个状态了，


//         this.props.myevent(index)
//     }
// }


const Tabbar = (props)=>{

    // function handleClick(index){

    //     props.myevent(index)
    // }

    return <div>
        <ul>
            {
                props.list.map( (item,index)=>
                <li key={item.id} className={props.current=== index? 'active':''} onClick={()=>props.myevent(index)}>{item.text}</li>    
                )
            }
        </ul>
    </div>
}

export default Tabbar