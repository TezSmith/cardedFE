import React, {Component} from 'react'
import SignupForm from './Signup'
import LoginForm from './Login'
import {connect} from 'react-redux'
import {getUser} from '../actions'


class AccountContainer extends Component {

  submitSignup = values => {
    this.props.getUser(values)
  }

  submitLogin = values => {
    console.log("This is the login", values)
  }

   render() {

     return(
       <div>
         { this.props.user.id === 0 ? <SignupForm onSubmit={this.submitSignup}/> : <LoginForm onSubmit={this.submitLogin}/>}
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
