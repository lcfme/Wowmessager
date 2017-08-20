import React, { Component } from 'react'
import { Modal } from 'antd'
import { Input } from 'antd';
import PhotoDisplay from './PhotoDisplay'
import UploadIcon from './UploadIcon'

const { TextArea } = Input;

export default class extends Component {
  constructor(props) {
    super()
  }

  changeWords(e) {
    let text = e.target.value
    if (/(<\/?script>)|(<\/?style>)/i.test(text) || text.length > 40) {
      text = text.substr(0, text.length - 1)
    }
    this.props.dispatch({
      type: 'upload/changeWords',
      payload: text,
    })
  }

  render() {
    return (<div>
      <Modal
        title="发布"
        visible={this.props.showModal}
        onOk={()=>{

        }}
        onCancel={()=>{
          this.props.dispatch({
            type: 'upload/hideModal',
          })
        }}
      >
      {
        !!this.props.file ? <PhotoDisplay src={this.props.file} /> : <UploadIcon dispatch={this.props.dispatch}/>
      }
      <TextArea placeholder="在这里输入文字" onChange={this.changeWords.bind(this)} value={this.props.postWords} />
      {this.props.postWords ? this.props.postWords.length : 0} / 40

      </Modal>
    </div>)
  }
}
