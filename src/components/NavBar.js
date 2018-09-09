import React from 'react'
import {connect} from 'react-redux'
import {handleLogout} from '../actions'
import { withRouter, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navbar = (props) => {
   const {handleLogout} = props

   const startLogout = () => {
     handleLogout()
     props.history.replace('/')
   }

  return (
      <Menu>
         <Menu.Item>
           <Link to='/'> Home </Link>
         </Menu.Item>

         <Menu.Item>
           <Link to='/MyCards'> My Cards </Link>
         </Menu.Item>

         <Menu.Menu position='right'>
          <Menu.Item>
          <a onClick={startLogout}>Logout</a>
         </Menu.Item>
         </Menu.Menu>
       </Menu>

  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections }
  }
}

export default withRouter(connect(mapStateToProps, {handleLogout})(Navbar))
