/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { useState,useEffect,useMemo } from 'react'
import axios from 'axios'


export default function Cinema(){
    const [mytext, setmytext] = useState("")
    const [cinemaList, setcinemaList] = useState([])


    useEffect(() => {
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
                
                'X-Host': 'mall.film-ticket.cinema.list'

            }
        }).then(res=>{
            setcinemaList(res.data.data.cinemas)
        })
    }, [])


    const getCinemaList = useMemo(() => cinemaList.filter(item=>item.name.toUpperCase().includes(mytext.toUpperCase()) || 
    item.address.toUpperCase().includes(mytext.toUpperCase())
    ), [cinemaList,mytext])

    return <div>
            {/* {this.state.mytext} */}
                <input value={mytext} onChange={(evt)=>{
                    setmytext(evt.target.value)
                }}/>
                {
                    getCinemaList.map(item=>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>    
                    )
                }
        
        </div>
}