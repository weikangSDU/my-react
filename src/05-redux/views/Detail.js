/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React,{useEffect} from 'react'
import store from '../redux/store'
import { show, hide } from '../redux/actionCreator/TabbarActionCreator'

export default function Detail(props) {
    console.log(props.match.params.myid,"利用id去后端拿数据。")
    // console.log(props.location.query.myid,"利用id去后端拿数据。")
    // console.log(props.location.state.myid,"利用id去后端拿数据。")

    useEffect(() => {
        // console.log("create")

        //store.dispatch  通知
        store.dispatch(hide())

        return () => {
            console.log("destroy")
            store.dispatch(show())    
        }
    }, [])

    return (
        <div>
            deteail
        </div>
    )
}
