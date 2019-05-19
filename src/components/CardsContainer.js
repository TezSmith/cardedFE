import React, {Component} from 'react'
import BizCard from './BizCard'
import CollectionContainer from './CollectionContainer'
import {connect} from 'react-redux'
import { Grid } from 'semantic-ui-react'

class CardsContainer extends Component {

  render() {
    // get all of users collections
    // display collection names as headers - CollectionContainer
    // under each collection
    // filter bizcards by collection id - then map the filteredCards to list <BizCard />s

      const collections = this.props.user.collections
      const newCard = this.props.user.bizcards.pop()

    return (
      <div className="cardsCont">
      <h2 id="mycards">My Cards</h2>
        {newCard ? <div className="lastCard"> <Grid stackable columns={3}>
              <Grid.Row>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column>
                  <h2>Latest Contact</h2>
                  <BizCard card={newCard} />
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
              </Grid.Row>
            </Grid> </div> : null }
        {collections.map(collection => { return <CollectionContainer key={collection.id} collection={collection} /> } )}
      </div>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, bizcards: state.text.user.bizcards, collections: state.text.user.collections }
  }
}

export default connect(mapStateToProps)(CardsContainer)
