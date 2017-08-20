import React from 'react'
import { Input, Icon, Rate } from 'antd'
import { Link } from 'react-router-dom'
import { MomentItem, MomentTitle,
  Avatar, PostImage, MessageWords,
  InputContainer, MomentReply,
  MomentGeo, RateContainer
} from './styled-components'

export default (props) => {
  return (
    <MomentItem>
      <MomentTitle>
        <Avatar src={props.avatar} alt="" />
        {props.username}
      </MomentTitle>
      <MessageWords>{props.postcontent}</MessageWords>
      <PostImage src={props.postimage} alt="" />
      <MomentGeo>
        <Icon type="environment" style={{fontSize: '1.2em'}} />
        <span
          style={{
            display: 'inline-block',
            backgroundColor: '#eee',
            borderRadius:'6px',
            height: '1.8em',
            padding: '0em 0.4em 0 0.4em',
            color: '#aaa',
            position: 'relative',
            top: '0.1em'
          }}
        >
          {props.distance} km
        </span>

      </MomentGeo>
      <RateContainer>
        <Rate /><span className="ant-rate-text">{props.rate} 分</span>
      </RateContainer>

    </MomentItem>
  )
}
