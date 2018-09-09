import React, {Component} from 'react'
import CapturePhoto from './CapturePhoto'
import NewCard from './NewCard'
import {connect} from 'react-redux'


class CameraContainer extends Component {

   render() {

     return(
       <div className="camera">
         { this.props.imgData ? <NewCard /> : <CapturePhoto /> }
       </div>
     )
   }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections },
    imgData: state.text.imgData,
    line1: state.text.line1,
    line2: state.text.line2,
    line3: state.text.line3,
    line4: state.text.line4,
    line5: state.text.line5
  }
}

export default connect(mapStateToProps)(CameraContainer)
