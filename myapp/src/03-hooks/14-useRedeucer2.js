/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React,{useReducer,useContext} from 'react'

const initailState = {
    a:"11111",
    b:"11111"
}

const reducer = (prevState,action)=>{
    let newstate = {...prevState}
    switch(action.type){
        case "change-a":
            newstate.a = action.value
            return newstate
        case "change-b":
            newstate.b = action.value
            return newstate
        default:
            return prevState
    }
    // return prevState
}

const GlobalContext = React.createContext()
export default function App() {
    const [state, dispatch] = useReducer(reducer, initailState)
    
    return (
        <GlobalContext.Provider value={
            {
                state,
                dispatch
            }
        }>
            <div>
                <Child1/>
                <Child2/>
                <Child3/>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1(){
    const {dispatch} = useContext(GlobalContext)
    return <div style={{background:"red"}}>
        <button onClick={()=>{
            dispatch({
                type:"change-a",
                value:"2222222"
            })
        }}>改变a</button>
        <button onClick={()=>{
            dispatch({
                type:"change-b",
                value:"333333"
            })
        }}>改变b</button>
    </div>
}

function Child2(){
    const {state} = useContext(GlobalContext)
    return <div style={{background:"yellow"}}>
        child2-{state.a}
    </div>
}

function Child3(){
    const {state} = useContext(GlobalContext)
    return <div style={{background:"gray"}}>
        child3-{state.b}
    </div>
}