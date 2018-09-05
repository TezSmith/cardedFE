import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'

const LoginForm = (props) => {
  const { handleSubmit, toggleLogin } = props

  return (
    <form onSubmit={handleSubmit}>
       <h4> Username: <Field type="username" name="username" component="input" /></h4>
       <button type="submit" value="submit">Login</button> <br/>
       <a onClick={toggleLogin}>Don't Have An Account?</a>
    </form>
  )

}

const mapStateToProps = (state, ownProps) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections }
  }
}

export default connect(mapStateToProps)( reduxForm({ form: 'loginform'})(LoginForm) )
