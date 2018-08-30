import React, { Component } from 'react'
import {connect} from 'react-redux'
import {retakePhoto} from '../actions'

class NewCard extends Component {


  render() {

    return (
      <div>
        <img src={this.props.imgData} alt=""/>
        <div className="newCard">
         <h3 id="cardText">{this.props.parsedText}</h3>
        </div>
        <button onClick={this.retakePhoto}>Retake</button>
        <button>Save</button>
        <button>Edit</button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    imgData: state.imgData,
    parsedText: state.parsedText
  }
}

export default connect(mapStateToProps, {retakePhoto})(NewCard)
