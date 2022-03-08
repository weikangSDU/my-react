/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React from 'react'
import {withRouter} from 'react-router-dom'

function Center(props) {
    return (
        <div>
            center

            <div onClick={()=>{
                props.history.push(`/filmsorder`)

                // console.log(props)
            }}>电影订单</div>
        </div>
    )
}

export default withRouter(Center)
