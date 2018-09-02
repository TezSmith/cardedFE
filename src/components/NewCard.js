import React, { Component } from 'react'
import {connect} from 'react-redux'
import {retakePhoto} from '../actions'
import CardForm from './CardForm'

class NewCard extends Component {

   // state = {
   //   showEdit: false
   // }
   //
   // handleEditClick = () => {
   //   this.setState(prevState => {
   //     return {
   //        showEdit: !prevState.showEdit
   //     }
   //   })
   // }

   submit = values => {
    // print the form values to the console
    console.log(values)
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
               <button onClick={this.props.retakePhoto}>Retake Photo</button>
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

export default connect(mapStateToProps, {retakePhoto})(NewCard)
