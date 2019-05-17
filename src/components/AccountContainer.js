import React, {Component} from 'react'
import SignupForm from './Signup'
import LoginForm from './Login'
import {connect} from 'react-redux'
import {registerUser, getUser} from '../actions'


class AccountContainer extends Component {

  state = {
    showSignup: false
  }

  toggleSignup = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      showSignup: !prevState.showSignup
    }))
  }

  handleSubmit = values => {
    this.state.showSignup === true ? this.props.registerUser(values) : this.props.getUser(values)
  }

   render() {

     return(
       <div className="accountCont">
         { this.state.showSignup ? <SignupForm onSubmit={this.handleSubmit} toggleSignup={this.toggleSignup}/> : <LoginForm onSubmit={this.handleSubmit} toggleLogin={this.toggleSignup}/> }
       </div>
     )
   }
}

export default connect(null, { registerUser, getUser })(AccountContainer)
