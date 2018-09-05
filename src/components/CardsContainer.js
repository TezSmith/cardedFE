import React, {Component} from 'react'
import CollectionContainer from './CollectionContainer'
import {connect} from 'react-redux'

class CardsContainer extends Component {

  render() {

    // get all of users collections
    // display collection names as headers - CollectionContainer
    // under each collection
    // filter bizcards by collection id - then map the filteredCards to list <BizCard />s

      const collections = this.props.user.collections

    return (
          <div>
            {collections.map(collection => { return <CollectionContainer key={collection.id} collection={collection} /> } )}
          </div>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections }
  }
}

export default connect(mapStateToProps)(CardsContainer)
