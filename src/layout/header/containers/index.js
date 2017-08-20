import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderPannel from '../components'

class Header extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        <HeaderPannel dispatch={this.props.dispatch} />
      </div>
    )
  }
}

export default connect()(Header)
