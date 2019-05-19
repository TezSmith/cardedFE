import React, { Component } from 'react'
import './App.css'
import NavBar from '../src/components/NavBar'
import HomeContainer from '../src/components/HomeContainer'
import CardsContainer from '../src/components/CardsContainer'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'

class App extends Component {


  render() {

    return (
      <div className="App">
        {this.props.user.id !== 0 ? <NavBar/> : null }
          <Switch>
          <Route path="/MyCards" component={CardsContainer} />
          <Route path="/" component={HomeContainer} />
          </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id }
  }
}

export default withRouter(connect(mapStateToProps)(App))
