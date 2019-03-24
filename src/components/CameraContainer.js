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
    imgData: state.text.imgData
  }
}

export default connect(mapStateToProps)(CameraContainer)
