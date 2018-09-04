import React, {Component} from 'react'
import SignupForm from './Signup'
import LoginForm from './Login'
import {connect} from 'react-redux'
import {registerUser, getUser} from '../actions'


class AccountContainer extends Component {

  submitSignup = values => {
    this.props.registerUser(values)
  }

  submitLogin = values => {
    this.props.getUser(values)
  }

   render() {

     return(
       <div>
         { this.props.user.id === 0 ? <LoginForm onSubmit={this.submitLogin}/> : <SignupForm onSubmit={this.submitSignup}/>}
       </div>
     )
   }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username}
  }
}

export default connect(mapStateToProps, { getUser })(AccountContainer)
