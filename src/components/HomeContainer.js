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
    user: {id: state.text.user.id, username: state.text.user.username, collections: state.text.user.collections },
    imgData: state.text.imgData,
    line1: state.text.line1,
    line2: state.text.line2,
    line3: state.text.line3,
    line4: state.text.line4,
    line5: state.text.line5
  }
}

export default connect(mapStateToProps)(HomeContainer)
