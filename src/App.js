import React, { Component } from 'react'
import './App.css'
import HomeContainer from '../src/components/HomeContainer'
import CardsContainer from '../src/components/CardsContainer'
import NavBar from '../src/components/NavBar'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
          <h1>Get Carded</h1>
          {this.props.user.id !== 0 ? <NavBar/> :null}
          <Switch>
            <Route exact path="/MyCards" component={CardsContainer} />
            <Route exact path="/" component={HomeContainer} />
          </Switch>
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

export default withRouter(connect(mapStateToProps)(App))
