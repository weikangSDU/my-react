import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Commingsoon from './films/commingsoon'
import Nowplaying from './films/nowplaying'

export default function Films() {
  return (
    <div>
      <div style={{height: '200px', background: 'yellow'}}>大轮播</div>
      <Switch>
        <Route path={'/films/commingsoon'} component={Commingsoon} />
        <Route path={'/films/Nowplaying'} component={Nowplaying} />
        <Redirect from='/films' to={'/films/Nowplaying'} />
      </Switch>
    </div>
  )
}
