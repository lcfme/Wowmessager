import React from 'react'
import { Input, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { MomentItem, MomentTitle,
  Avatar, PostImage, MessageWords,
  InputContainer, MomentReply,
  MomentGeo
} from './styled-components'

export default (props) => {
  return (
    <MomentItem>
      <MomentTitle>
        <Avatar src="/test.jpg" alt="" />
        刘璐
      </MomentTitle>
      <MessageWords>旋转，跳跃，动起来</MessageWords>
      <PostImage src="./post.jpg" alt="" />
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
          420 km
        </span>

      </MomentGeo>
      <InputContainer>
        <Input type='text' placeholder='喵一下我吧~'
          style={{fontSize: '1.2em'}}
          suffix={<Icon type="enter" style={{fontSize: '1.2em', color: '#E32E7F'}}/>}
        />
      </InputContainer>
      <MomentReply>
        <Link to="/home" style={{ color: '#24396A' }}>色色哒: </Link>
        今天是个好日子
      </MomentReply>
    </MomentItem>
  )
}
