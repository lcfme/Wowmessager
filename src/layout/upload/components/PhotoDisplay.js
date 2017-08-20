import React from 'react'
import styled from 'styled-components'

const Display = styled.img`
  max-width: 90%;
  max-height: 400px;
  margin: 0 auto;
  display: block;
  margin-bottom: 1.2em;
`

export default ({src}) => (<div>
    <Display src={src} />
  </div>)
