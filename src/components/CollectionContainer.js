import React, {Component} from 'react'
import BizCard from './BizCard'
import {connect} from 'react-redux'

class CollectionContainer extends Component {

  render() {

    const {collection_name} = this.props.collection

    // get all of users collections
    // display collection names as headers - CollectionContainer
    // under each collection
    // filter bizcards by collection id - then map the filteredCards to list <BizCard />s

      const bizcards = this.props.user.bizcards
      let collectionCards = bizcards.filter(b => b.collection_id === this.props.collection.id )

    return (
          <div>
           <h1>{collection_name} </h1>
            {collectionCards.map(card => { return <BizCard key={card.id} card={card} /> } )}
          </div>
     )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards}
  }
}

export default connect(mapStateToProps)(CollectionContainer)
