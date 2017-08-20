import React from 'react'
import styled from 'styled-components'
import Header from '../../header/containers'
import Monments from '../../../modules/moments/containers'

const Loading = styled.img`
  display: ${props => props.isFetching ? 'inline-block' : 'none'};
  width: 30%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 9999;
`
export default (props) => {
  console.log(props)
  return (
    <div>
      <Loading isFetching={props.isFetching} src="/infras/imgs/loading.svg" />
      <Header />
      <Monments />
    </div>
  )
}
