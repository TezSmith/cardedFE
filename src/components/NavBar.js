import React from 'react'
import {connect} from 'react-redux'
import {handleLogout} from '../actions'
import { withRouter, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navbar = (props) => {
   const {handleLogout} = props

   const startLogout = () => {
     localStorage.removeItem("token")
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

export default withRouter(connect(null, {handleLogout})(Navbar))
