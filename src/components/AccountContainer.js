import React, {Component} from 'react'
import SignupForm from './Signup'
import LoginForm from './Login'
import {connect} from 'react-redux'
import {registerUser, getUser} from '../actions'
import DivWithErrorHandling from './ErrorHandle';


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
        <DivWithErrorHandling error={this.props.error} >
         {this.state.showSignup ? <SignupForm onSubmit={this.handleSubmit} toggleSignup={this.toggleSignup} /> : <LoginForm onSubmit={this.handleSubmit} toggleLogin={this.toggleSignup}/> }
         </DivWithErrorHandling>
         </div>
       
     )
   }
}

const mapStateToProps = (state) => {
  return {
    error: state.text.error
  }
}


export default connect(mapStateToProps, { registerUser, getUser })(AccountContainer)
