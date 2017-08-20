import React from 'react'
import styled from 'styled-components'
import { Header, Logo, RightFlow } from './styled-components'
import { Icon } from 'antd'


const AIcon = styled(Icon)`
  font-size: 1.2em;
  margin-left: 1em;
`




export default (props) => {
  return (
    <Header>
      <Logo src="/infras/imgs/logo.svg" alt="这是将是一个很GAY很GAY的网站" />
      <RightFlow>
        <AIcon type="upload" onClick={
          (e) => {
            props.dispatch({
              type: 'upload/showModal'
            })
          }
        }/>
        <AIcon type="message" />
        <AIcon type="user" />
      </RightFlow>
    </Header>
  )
}
