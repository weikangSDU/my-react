/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'

import style from './css/Film.module.css'

console.log(style)
export default class Films extends Component {
    render() {
        return (
            <div className={style.film+" aaaa"}>
                <div style={{height:"200px",background:"yellow"}}>大轮播</div>

                <ul>
                    <li>
                        <NavLink to="/films/nowplaying" activeClassName={style.kerwinactive}>正在热映</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films/comingsoon" activeClassName={style.kerwinactive}>即将上映</NavLink>
                    </li>
                </ul>

                {/* 路由配置 嵌套路由 */}
            {/* <Nowplaying/> */}
                <Switch>
                    <Route path="/films/nowplaying" component={Nowplaying}/>
                    <Route path="/films/comingsoon" component={Comingsoon}/>
                    <Redirect from="/films" to="/films/nowplaying"/> 
                </Switch>

            </div>
        )
    }
}
