import React from 'react'
import {connect} from 'react-redux'
import AccountContainer from './AccountContainer'
import CameraContainer from './CameraContainer'

const HomeContainer = (props) => {

  return (
    <div>
      {props.user.id === 0 ? <AccountContainer/> : <CameraContainer/>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, collections: state.text.user.collections }
  }
}

export default connect(mapStateToProps)(HomeContainer)
