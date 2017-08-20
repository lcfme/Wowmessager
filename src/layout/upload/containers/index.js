import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../header/containers'
import UploadPanel from '../components/'
export default connect(({upload})=>{
  return {
    ...upload,
  }
})(class extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <UploadPanel {...this.props} />
      </div>
    )
  }
})
