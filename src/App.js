import React, { Component } from 'react'
import './App.css'
import CapturePhoto from '../src/components/CapturePhoto'
import {connect} from 'react-redux'

class App extends Component {


  render() {

    console.log(this.props.parsedText)

    return (
      <div className="App">
          <h1>Get Carded!</h1>
          <CapturePhoto />
          <h3>Card Results</h3>
          {this.props.parsedText}
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

export default connect(mapStateToProps)(App)
