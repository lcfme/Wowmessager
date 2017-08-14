import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        It works.
      </div>
    )
  }
}

export default connect()(Header)
