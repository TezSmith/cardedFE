import React from 'react'
import {connect} from 'react-redux'
import {handleLogout} from '../actions'

const Navbar = (props) => {
   const {handleLogout, handleCards} = props

  return (
    <div>
       <h3>Welcome, {props.user.username}</h3>
       <button>Take Photo</button>
       <button onClick={handleCards}>See Cards</button>
       <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections }
  }
}

export default connect(mapStateToProps, {handleLogout})(Navbar)
