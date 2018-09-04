import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'

const SignupForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
       <h4>Name: <Field type="name" name="name" component="input" /></h4>
       <h4>Username: <Field type="username" name="username" component="input" /></h4>
       <button type="submit" value="submit">Signup</button>
    </form>
  )

}

const mapStateToProps = (state, ownProps) => {
  return {
    user_id: state.text.user_id
  }
}

export default connect(mapStateToProps)( reduxForm({ form: 'signupform'})(LoginForm) )
