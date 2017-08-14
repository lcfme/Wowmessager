import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Route from './Route'
import 'antd/dist/antd.less'


ReactDOM.render(
  <Provider store={store}>
    <Route></Route>
  </Provider>,
  document.querySelector('#app')
)
