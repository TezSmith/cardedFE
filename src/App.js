import React, { Component } from 'react'
import './App.css'
import Webcam from 'react-webcam'

class App extends Component {

  state = {
    imgData: null
  }

  setRef = (webcam) => {
    this.webcam = webcam
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc)
    this.setState({
      imgData: imageSrc
    })
  }

  render() {

    const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'environment',
    }

    return (
      <div className="App">
          <h1>Get Carded!</h1>
          {this.state.imgData ? <img src={this.state.imgData} alt=""/> : <Webcam audio={false} ref={this.setRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints}/>}<br/>
          <button onClick={this.capture}>Take Photo</button>
          <button>Save Photo</button>
      </div>
    )
  }
}

export default App;
