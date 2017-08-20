import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomePannel from '../components'
class Home extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        <HomePannel {...this.props}/>
      </div>
    )
  }
}

export default connect(
  ({mainLayout})=>{
    return {
      ...mainLayout
    }
  }
)(Home)
