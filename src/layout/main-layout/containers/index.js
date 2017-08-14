import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        {this.props.testState}
        <button onClick={(e)=>{this.props.dispatch({type: 'mainLayout/test', payload: 'Happy coding'})}}>测试</button>
      </div>
    )
  }
}

export default connect(
  ({mainLayout})=>{
    return mainLayout
  },
  (dispatch)=>{
    return {
      dispatch
    }
  }
)(Home)
