import React, { Component } from 'react'
import './App.css'
import AccountContainer from '../src/components/AccountContainer'
import CameraContainer from '../src/components/CameraContainer'
import BizCardContainer from '../src/components/BizCardContainer'
import NavBar from '../src/components/NavBar'
import {connect} from 'react-redux'

class App extends Component {

  state = {
    showCards: false
  }

  handleCards = () => {
    this.setState(prevState => ({
      showCards: !prevState.showCards
    }))
  }

  showContainer = () => {
    if (this.state.showCards === false) {
      return <CameraContainer />
    } else {
      return <BizCardContainer />
    }
  }



  render() {

    return (
      <div className="App">
          <h1>Get Carded</h1>
          {this.props.user.id !== 0 ? <NavBar handleCards={this.handleCards}/> :null }
          {this.props.user.id === 0 ? <AccountContainer/> : this.showContainer()}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, collections: state.text.user.collections },
    imgData: state.text.imgData,
    line1: state.text.line1,
    line2: state.text.line2,
    line3: state.text.line3,
    line4: state.text.line4,
    line5: state.text.line5
  }
}

export default connect(mapStateToProps)(App)
