import React, { Component } from 'react'
import {connect} from 'react-redux'
import {retakePhoto} from '../actions'
import {createCard} from '../actions'
import GetCard from './CardForm'

class NewCard extends Component {

  // state = {
  //   line1: this.props.line1,
  //   line2: this.props.line2,
  //   line3: this.props.line3,
  //   line4: this.props.line4,
  //   line5: this.props.line5,
  //   card_name: this.props.card_name,
  //   collection_name: this.props.collection_name
  // }

  submit = values => {
    this.props.createCard(values)
  }


  render() {

    const {imgData} = this.props
    // console.log("This is the component props", this.props)

    return (
         <div>
           <div className="newCardCont">
             <img src={imgData} alt=""/>
              <div className="newCard">
              <div id="cardText">
               <GetCard onSubmit={this.submit}/>
               <button onClick={this.props.retakePhoto}>Retake</button>
              </div>
            </div>
          </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    current_user: {id: state.text.current_user.id},
    imgData: state.text.imgData,
    line1: state.text.line1,
    line2: state.text.line2,
    line3: state.text.line3,
    line4: state.text.line4,
    line5: state.text.line5,
    card_name: state.text.card_name,
    collection_name: state.text.collection_name
  }
}

export default connect(mapStateToProps, {retakePhoto, createCard})(NewCard)
