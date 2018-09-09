import React, {Component} from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default class BizCard extends Component {

  render(){

    const {line1, line2, line3, line4, line5 } = this.props.card
    const card_name = this.props.card.card_name || this.props.card["card-name"]
    const description = [line1, line2, line3, line4, line5].join(" \n ")

    return (

        <div className="bizcard">
         <div id="cardText">
          <h4>{card_name}</h4>
          <p>{line1}</p>
          <p>{line2}</p>
          <p>{line3}</p>
          <p>{line4}</p>
          <p>{line5}</p>
          </div>
        </div>

    )
  }
}
