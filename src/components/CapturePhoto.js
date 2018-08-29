import React, { Component } from 'react'
import Webcam from 'react-webcam'
// import MYAPI from '../connectAPI.js'
// import $ from 'jquery'
import {connect} from 'react-redux'
import {setImgData, convertImg} from '../actions'

class CapturePhoto extends Component {

  setRef = (webcam) => {
    this.webcam = webcam
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.setImgData(imageSrc)
  }

  createCard = (e) => {
    e.preventDefault()
    this.props.convertImg(this.props.imgData)
  }

  // convertImg = (imageSrc) => {
  //
  //   let form = new FormData()
  //   form.append('base64Image', imageSrc)
  //
  //   var settings = {
  //     "async": true,
  //     "crossDomain": true,
  //     "url": "https://api.ocr.space/parse/image",
  //     "method": "POST",
  //     "headers": {
  //       "apiKey": MYAPI,
  //       "Cache-Control": "no-cache",
  //     },
  //     "processData": false,
  //     "contentType": false,
  //     "mimeType": "multipart/form-data",
  //     "data": form
  //   }
  //
  //   $.ajax(settings).done((response) => {
  //     let resData = JSON.parse(response)
  //     let parsedText = resData.ParsedResults[0].ParsedText
  //   })
  //
  // }

  render() {

    const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
    }

    return (
      <div>
        {this.props.imgData ?
          <div>
            <img src={this.props.imgData} alt=""/>
            <br/>
            <button onClick={this.createCard}>Create Card</button>
          </div> :
          <div>
            <Webcam audio={false} ref={this.setRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints}/>
            <br/>
            <button onClick={this.capture}>Take Photo</button>
         </div>}
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

export default connect(mapStateToProps,{setImgData, convertImg})(CapturePhoto)
