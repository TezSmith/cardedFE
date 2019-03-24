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
           <div id="photoCont">
             <img src={imgData} alt="" id="photo"/>
              <div>
              <div id="cardText">
               <CardForm onSubmit={this.submit}/>
               <Button onClick={this.props.retakePhoto} color="teal">Retake</Button>
              </div>
            </div>
          </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    imgData: state.text.imgData
  }
}

export default withRouter(connect(mapStateToProps, {retakePhoto, createCard})(NewCard))
