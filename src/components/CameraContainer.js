import React, {Component} from 'react'
import CapturePhoto from './CapturePhoto'
import NewCard from './NewCard'
import {connect} from 'react-redux'


class CameraContainer extends Component {

   render() {

     return(
       <div>
         { this.props.imgData ? <NewCard /> : <CapturePhoto /> }
       </div>
     )
   }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, collection: state.text.user.collection },
    imgData: state.text.imgData
  }
}

export default connect(mapStateToProps)(CameraContainer)
