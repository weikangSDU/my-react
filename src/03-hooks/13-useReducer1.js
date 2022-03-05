/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

 import React,{useReducer} from 'react'
 //处理函数
 const reducer = (prevState,action)=>{
     console.log("reduercer",prevState,action)
     let newstate = {...prevState}
     switch(action.type){
         case "kerwin-minus":
            newstate.count--
            return newstate

         case "kerwin-add":
            newstate.count++
            return newstate
        
         default:
            return prevState
     }
 }
 // 外部的对象
 const intialState = {
     count:0,
    //  list:[]
 } 

 export default function App() {
     const [state, dispatch] = useReducer(reducer,intialState)

     return (
         <div>
             <button onClick={()=>{
                 dispatch({
                     type:"kerwin-minus"
                 })
             }}>-</button>
             {state.count}
             <button onClick={()=>{
                 dispatch({
                    type:"kerwin-add"
                })
             }}>+</button>
         </div>
     )
 }
 