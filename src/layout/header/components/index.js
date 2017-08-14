import React from 'react'
import styled from 'styled-components'
import { Header } from './styled-components'
import { Icon } from 'antd'

const StyledIcon = styled(Icon)`
  display: 'inline-block';
  height: 100%;
  color: #fff;
`

export default (props) => {
  return (
    <Header>
      <StyledIcon type="smile" />
    </Header>
  )
}
