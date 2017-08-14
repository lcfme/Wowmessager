import React from 'react'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'
import Home from './layout/main-layout/containers/index.js'
import Moments from './modules/moments/components/'
import Header from './layout/header/components/'

export default () => {
  return (
    <HashRouter>
      <Route path='/' component={Header}>
      </Route>
    </HashRouter>
  )
}
