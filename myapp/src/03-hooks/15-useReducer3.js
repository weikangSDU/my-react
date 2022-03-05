/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { useEffect,useContext,useReducer } from 'react'
import axios from 'axios'
import './css/index.css'

const GlobalContext  = React.createContext() //创建context对象


const intialState  ={
    info:"",
    filmList:[]
}

const reducer = (prevState,action)=>{
    var newState = {...prevState}

    switch(action.type){
        case "change-filmlist":
            newState.filmList = action.value
            return newState
        case "change-info":
            newState.info = action.value
            return newState
        default :
            return prevState
    }
}

export default function App (){

    const [state,dispatch]  =useReducer(reducer,intialState)

    useEffect(() => {
        axios.get(`/test.json`).then(res=>{
            // console.log(res.data.data.films)

            dispatch({
                type:"change-filmlist",
                value:res.data.data.films
            })
        })
    }, [])

    return (
        <GlobalContext.Provider value={
            {
                state,
                dispatch
            }
        }>
            <div>
                {/* {this.state.info} */}
                {
                    state.filmList.map(item=>
                        <FilmItem key={item.filmId} {...item} ></FilmItem>    
                    )
                }


                <FilmDetail ></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}

/*受控组件*/

function FilmItem(props){
    let {name, poster,grade,synopsis}  = props
    const {dispatch} = useContext(GlobalContext)

    // console.log(context)
    return <div className="filmitem" onClick={()=>{
                console.log(synopsis)
                // this.props.onEvent(synopsis)

                // value.info = "2222222"

                // console.log(value)

                dispatch({
                    type:"change-info",
                    value:synopsis
                })
            }}>
                <img src={poster} alt={name}/>
                <h4>{name}</h4>
                <div>观众评分：{grade}</div>
            </div> 
}



function FilmDetail(){
    const {state} = useContext(GlobalContext)
    return <div className="filmdetail">
        detail-{state.info}
    </div>
}

