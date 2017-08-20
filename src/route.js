import React from 'react'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'
import Home from './layout/main-layout/containers/index.js'

export default () => {
  return (
    <HashRouter>
      <Route path='/' component={Home}>
      </Route>
    </HashRouter>
  )
}
