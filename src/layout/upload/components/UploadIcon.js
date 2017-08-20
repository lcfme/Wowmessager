import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'

const Display = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  max-height: 1000px;
  margin: 0 auto;
  display: block;
  line-height: 40px;
  text-align: center;
`

const DIcon = styled(Icon)`
  font-size: 25px;
`

const reader = (file, options) => {
  options = options || {};
  return new Promise(function (resolve, reject) {
    let reader = new FileReader();

    reader.onload = function () {
      resolve(reader);
    };
    reader.onerror = reject;

    if (options.accept && !new RegExp(options.accept).test(file.type)) {
      reject({
        code: 1,
        msg: 'wrong file type'
      });
    }

    if (!file.type || /^text\//i.test(file.type)) {
      reader.readAsText(file);
    } else {
      reader.readAsDataURL(file);
    }
  });
}


export default class extends Component {
  constructor(props) {
    super()
  }

  async getFile(e) {
    const img = e.target.files[0]
    if (img.size > 5242880 || !/jpe?g/i.test(img.type)) {
      alert('文件只能是jpeg格式')
      return
    }
    const base64 = await reader(img).then((data) => {
      return data.result
    })
    this.props.dispatch({
      type: 'upload/fileAttach',
      payload: base64,
    })
  }


  render() {
    return (<div>
        <Display>
        <input type="file"
          style={{position: 'absolute', left: 0, top: 0,
          opacity: 0, zIndex: 9999}}
          onChange={this.getFile.bind(this)}
        />
        <DIcon type="upload" />
        </Display>
      </div>)
  }
}
