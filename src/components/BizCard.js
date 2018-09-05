import React, {Component} from 'react'
// import {connect} from 'react-redux'

export default class BizCard extends Component {
  render(){
    
    const {card_name, line1, line2, line3, line4, line5 } = this.props.card

    return (
      <div className="bizcard">
         <p>{card_name}</p>
         <p>{line1}</p>
         <p>{line2}</p>
         <p>{line3}</p>
         <p>{line4}</p>
         <p>{line5}</p>
      </div>
    )
  }
}
