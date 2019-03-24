import React, {Component} from 'react'
import SignupForm from './Signup'
import LoginForm from './Login'
import {connect} from 'react-redux'
import {registerUser, getUser} from '../actions'


class AccountContainer extends Component {

  state = {
    showSignup: true
  }

  toggleSignup = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      showSignup: !prevState.showSignup
    }))
  }

  submitSignup = values => {
    this.props.registerUser(values)
  }

  submitLogin = values => {
    this.props.getUser(values)
  }

   render() {

     return(
       <div className="accountCont">
         { this.state.showSignup ? <SignupForm onSubmit={this.submitSignup} toggleSignup={this.toggleSignup}/> : <LoginForm onSubmit={this.submitLogin} toggleLogin={this.toggleSignup}/> }
       </div>
     )
   }
}

export default connect(null, { registerUser, getUser })(AccountContainer)
