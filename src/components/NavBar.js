import React from 'react'
import {connect} from 'react-redux'
import {handleLogout} from '../actions'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
   const {handleLogout} = props

  return (

    <div>
       <h3>Welcome, {props.user.username}</h3>
       <Link to='/'> Home </Link>
       <Link to='/MyCards'> My Cards </Link>
       <a onClick={handleLogout}>Logout</a>
    </div>
  )
}

// history.replace <- how to reset link back to /

const mapStateToProps = (state, ownProps) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections }
  }
}

export default connect(mapStateToProps, {handleLogout})(Navbar)
