import React from 'react'
import {connect} from 'react-redux'
import {handleLogout} from '../actions'

const Navbar = (props) => {
   const {handleLogout} = props

  return (
    <div>
       <h1>Get Carded</h1>
       { props.user.id !== 0 ? <h3>Welcome, {props.user.username}</h3> : null }
       { props.user.id !== 0 ? <button onClick={handleLogout}>Logout</button> : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username}
  }
}

export default connect(mapStateToProps, {handleLogout})(Navbar)
