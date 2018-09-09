import React, {Component} from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default class BizCard extends Component {

  render(){

    const {line1, line2, line3, line4, line5 } = this.props.card
    const card_name = this.props.card.card_name || this.props.card["card-name"]
    const collection_name = this.props.card.collection_name || this.props.card["collection-name"]
    const description = [line1, line2, line3, line4, line5].join(" \n ")

    return (

        <div className="bizcard">
          <Card>
            <Card.Content header={card_name} />
            <Card.Content description={description} />
            <Card.Content extra>
              <Icon name='user' />
              Will give users ability to delete.
            </Card.Content>
          </Card>
        </div>

    )
  }
}
