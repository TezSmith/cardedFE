import React, {Component} from 'react'
import BizCard from './BizCard'
import CollectionContainer from './CollectionContainer'
import {connect} from 'react-redux'

class CardsContainer extends Component {

  render() {
    // get all of users collections
    // display collection names as headers - CollectionContainer
    // under each collection
    // filter bizcards by collection id - then map the filteredCards to list <BizCard />s

      const collections = this.props.user.collections
      const { newCard } = this.props

    return (
          <div className="cardsCont">
            {newCard ? <div className="lastCard">
              <h2>Your Latest Card</h2>
              <BizCard card={newCard} />
            </div> : null}
            {collections.map(collection => { return <CollectionContainer key={collection.id} collection={collection} /> } )}
          </div>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections },
    newCard: state.text.newCard
  }
}

export default connect(mapStateToProps)(CardsContainer)
