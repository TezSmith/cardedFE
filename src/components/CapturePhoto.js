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
    imgData: state.imgData,
    parsedText: state.parsedText
  }
}

export default connect(mapStateToProps,{convertImg})(CapturePhoto)
