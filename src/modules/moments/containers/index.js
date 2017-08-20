import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import MomentPanel from '../components'

export default connect(({moments})=>{
  return {
    ...moments
  }
})(class extends Component {
  constructor(props) {
    super()
  }

  async fetchPosts() {
    this.props.dispatch({
      type: 'mainLayout/fetchStart'
    })
    const response = await fetch('/moments').then((data) => {
      return data.json()
    })
    this.props.dispatch({
      type: 'moments/fetched',
      payload: response
    })
    this.props.dispatch({
      type: 'mainLayout/fetchEnd',
    })
  }

  componentDidMount() {
    this.fetchPosts()
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props)}
        <MomentPanel dispatch={this.props.dispatch} />
      </div>
    )
  }
})
