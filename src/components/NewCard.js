import React, { Component } from 'react'
import {connect} from 'react-redux'
import {retakePhoto} from '../actions'

class NewCard extends Component {


  render() {

     let paragraph = this.props.parsedText
     let sentA = paragraph["wordsA"]
     let sentB = paragraph["wordsB"]
     let sentC = paragraph["wordsC"]

     console.log(paragraph)

    return (
      <div>
        <img src={this.props.imgData} alt=""/>
        <div className="newCard" id="cardText">
         <h4>{sentA}</h4>
         <h4>{sentB}</h4>
          <h4>{sentC}</h4>
        </div>
        <button onClick={this.props.retakePhoto}>Retake</button>
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
