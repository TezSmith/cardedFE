import React, { Component } from 'react'
import {connect} from 'react-redux'
import {retakePhoto} from '../actions'
import {createCard} from '../actions'
import CardForm from './CardForm'

class NewCard extends Component {

  submit = values => {
    console.log("this are the form values", values)
    this.props.createCard(values)
  }

  render() {

    const {imgData} = this.props

    return (
         <div>
           <div className="newCardCont">
             <img src={imgData} alt=""/>
              <div className="newCard">
              <div id="cardText">
               <CardForm onSubmit={this.submit}/>
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
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections },
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
