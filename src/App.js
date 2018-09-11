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
        {this.props.user.id !== 0 ? <NavBar/> :null }
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
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections }
  }
}

export default withRouter(connect(mapStateToProps)(App))
