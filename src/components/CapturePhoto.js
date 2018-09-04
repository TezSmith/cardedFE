import React, { Component } from 'react'
import Webcam from 'react-webcam'
import {connect} from 'react-redux'
import {convertImg} from '../actions'

class CapturePhoto extends Component {

  setRef = (webcam) => {
    this.webcam = webcam
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.convertImg(imageSrc)
  }

  render() {

    const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
    }

    return (
      <div className="Camera">
        <Webcam audio={false} ref={this.setRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints}/>
        <br/>
        <button onClick={this.capture}>Take Photo</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user_id: state.text.user_id,
    imgData: state.text.imgData,
    line1: state.text.line1,
    line2: state.text.line2,
    line3: state.text.line3,
    line4: state.text.line4,
    line5: state.text.line5,
    card_name: state.text.card_name,
    collection_name: state.text.collection_name
  }
}

export default connect(mapStateToProps,{convertImg})(CapturePhoto)
