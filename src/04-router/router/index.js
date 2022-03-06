import React from 'react'
import {HashRouter, Redirect, Route, Switch, } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFount from '../views/NotFount'
export default function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path={'/films'} component={Films} />
          <Route path={'/cinemas'} component={Cinemas} />
          <Route path={'/center'} component={Center} />
          {/* 模糊匹配 */}
          <Redirect from='/' to={'/films'} exact />
          {/* 精准匹配 exact */}
          <Route component={NotFount} />
        </Switch>
      </HashRouter>
    </div>
  )
}
