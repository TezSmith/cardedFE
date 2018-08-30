import React, { Component } from 'react'
import './App.css'
import CapturePhoto from '../src/components/CapturePhoto'
import NewCard from '../src/components/NewCard'
import {connect} from 'react-redux'

class App extends Component {


  render() {

    return (
      <div className="App">
          <h1>Get Carded!</h1>
          {this.props.imgData ? <NewCard /> : <CapturePhoto /> }
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
