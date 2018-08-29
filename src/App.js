import React, { Component } from 'react'
import './App.css'
import Webcam from 'react-webcam'
import MYAPI from './connectAPI.js'
import $ from 'jquery'

class App extends Component {

  state = {
    imgData: null,
    parsedText: ''
  }

  setRef = (webcam) => {
    this.webcam = webcam
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      imgData: imageSrc
    }, () => {
      this.convertImg(imageSrc)
    })
  }

  convertImg = (imageSrc) => {

    // const headers = { apikey: MYAPI, 'Content-Type': 'multipart/form-data' }
    // const body = JSON.stringify({base64Image: imageSrc})
    // fetch('https://api.ocr.space/parse/image', {
    //   method: 'POST',
    //   headers: headers,
    //   body: JSON.stringify({body})
    // }).then(res => res.json())
    // .then(console.log)

    let form = new FormData()
    form.append('base64Image', imageSrc)

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.ocr.space/parse/image",
      "method": "POST",
      "headers": {
        "apiKey": MYAPI,
        "Cache-Control": "no-cache",
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    $.ajax(settings).done((response) => {
      let resData = JSON.parse(response)
      let parsedText = resData.ParsedResults[0].ParsedText
      this.setState({
        parsedText: parsedText
      })

    })

  }



  render() {

    const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
    }

    console.log(this.state.parsedText)

    return (
      <div className="App">
          <h1>Get Carded!</h1>
          {this.state.imgData ? <img src={this.state.imgData} alt=""/> : <Webcam audio={false} ref={this.setRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints}/>}
          <br/>
          <button onClick={this.capture}>Take Photo</button>
          <br/>
          <h3>Card Results</h3>
          <h5>{this.state.parsedText}</h5>
      </div>
    )
  }
}

export default App;
