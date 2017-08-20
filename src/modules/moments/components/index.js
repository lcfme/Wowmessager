import React from 'react'
import { MomentContainer } from './styled-components'
import MomentItem from './MomentItem'

export default (props) => {
  return (
    <MomentContainer>
    {
      props.results && props.results.map((item, index) => {
        return (
          <MomentItem key={item.postid} {...item} />
        )
      })
    }
    </MomentContainer>
  )
}
