import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Leaderboards from './components/Leaderboards'

const Routes = (
  <Route path="/" component={App} >
    <Route path="home" component={Home} />
    <Route path="leaderboards" component={Leaderboards} />
  </Route>
)

module.exports = Routes
