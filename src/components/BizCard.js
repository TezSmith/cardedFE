import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteCard} from '../actions'

class BizCard extends Component {

  render(){

    const {line1, line2, line3, line4, line5, id } = this.props.card
    const card_name = this.props.card.card_name || this.props.card["card-name"]

    return (

        <div className="bizcard">
         <div id="cardText">
          <h4>{card_name}</h4>
          <p>{line1}</p>
          <p>{line2}</p>
          <p>{line3}</p>
          <p>{line4}</p>
          <p>{line5}</p>
          <a href="#" onClick={() => {this.props.deleteCard(id)}}>x</a>
          </div>
        </div>

    )
  }
}



export default connect(null, {deleteCard})(BizCard)
