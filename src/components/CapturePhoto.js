import React, { Component } from 'react'
import Webcam from 'react-webcam'
import {connect} from 'react-redux'
import {convertImg} from '../actions'
import { Button } from 'semantic-ui-react'

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
      facingMode: 'environment',
    }

    return (
      <div id="capturePhotoBackground">
        <div id="camera">
            <h2>Get Started</h2>
            <p>Take a photo of your business card.</p>
            <p>Edit the details as necessary.</p>
            <p>Add your card to a collection & save!</p>
            <Webcam className="rcam" audio={false} height={480} width={640} ref={this.setRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints}/>
            <div id="camera-button">
              <Button onClick={this.capture} color="teal">Take Photo</Button>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections },
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
