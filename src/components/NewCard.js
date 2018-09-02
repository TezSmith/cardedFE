import React, { Component } from 'react'
import {connect} from 'react-redux'
import {retakePhoto} from '../actions'
// import EditCard from './EditCard'

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

  render() {

     const {imgData, line1, line2, line3, line4, line5 } = this.props

    return (
       <div>
           <div className="newCardCont">
             <img src={imgData} alt=""/>
              <div className="newCard">
              <div id="cardText">

               <h4>Line 1: <input type="text" name="line1" placeholder={line1}/></h4>
               <h4>Line 2: <input type="text" name="line2" placeholder={line2}/></h4>
               <h4>Line 3: <input type="text" name="line3" placeholder={line3}/></h4>
               <h4>Line 4: <input type="text" name="line4" placeholder={line4}/></h4>
               <h4>Line 5: <input type="text" name="line5" placeholder={line5}/></h4>
               <h4>Name Your Card: <input type="text" name="card_name" placeholder="Card Name"/></h4>
               <h4>Add To Collection:
                  <select>
                    <option name="collection_name" defaultValue="misc">Miscellaneous</option>
                    <option name="collection_name" value="employers">Employers</option>
                    <option name="collection_name" value="partners">Partners</option>
                    <option name="collection_name" value="creatives">Creatives</option>
                  </select>
               </h4>
               <button type="submit" value="submit">Save Card</button>
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

export default connect(mapStateToProps, {retakePhoto})(NewCard)
