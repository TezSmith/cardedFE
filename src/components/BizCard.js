import React, {Component} from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default class BizCard extends Component {

  render(){

    const {card_name, line1, line2, line3, line4, line5 } = this.props.card
    const description = [line1, line2, line3, line4, line5].join("\n")

    return (

        <div className="bizcard">
          <Card>
            <Card.Content header={card_name} />
            <Card.Content description={description} />
            <Card.Content extra>
              <Icon name='user' />
              4 Friends
            </Card.Content>
          </Card>
        </div>

    )
  }
}
