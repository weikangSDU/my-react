/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import axios from 'axios'
import React, { Component } from 'react'

export default class Comingsoon extends Component {
    componentDidMount() {
        axios.get("/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=0213411066DB11EC97E5B17F51643A714D3DCE91F9A042A0B8038AF6545D2CFB&optimus_risk_level=71&optimus_code=10").then(res=>{
            console.log(res.data)
        })
    }
    
    render() {
        return (
            <div>
                Comingsoon
            </div>
        )
    }
}
