import React, { Component } from 'react'
import './App.css'
import CapturePhoto from '../src/components/CapturePhoto'
import NewCard from '../src/components/NewCard'
import AccountContainer from '../src/components/AccountContainer'
import CameraContainer from '../src/components/CameraContainer'
// import BizCardContainer from '../src/components/BizCardContainer'
import NavBar from '../src/components/NavBar'
import {connect} from 'react-redux'

class App extends Component {


  render() {

    return (
      <div className="App">
          <NavBar />
          {this.props.user.id === 0 ? <AccountContainer/> : <CameraContainer />}
          {/*<BizCardContainer />*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username},
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

export default connect(mapStateToProps)(App)
