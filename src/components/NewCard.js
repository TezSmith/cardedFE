import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import {retakePhoto} from '../actions'
import {createCard} from '../actions'
import CardForm from './CardForm'

class NewCard extends Component {

  submit = values => {
    this.props.createCard(values)
    this.props.history.replace('/MyCards')
  }

  render() {

    const {imgData} = this.props

    return (
         <div id="newCardCont">
           <div id="photo">
             <img src={imgData} alt=""/>
              <div>
              <div id="cardText">
               <CardForm onSubmit={this.submit}/>
               <Button onClick={this.props.retakePhoto}>Retake</Button>
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
    line5: state.text.line5
  }
}

export default withRouter(connect(mapStateToProps, {retakePhoto, createCard})(NewCard))
