import React, {Component} from 'react'
import BizCard from './BizCard'
import {connect} from 'react-redux'
import { Grid } from 'semantic-ui-react'

class CollectionContainer extends Component {

  render() {

    // get all of users collections
    // display collection names as headers - CollectionContainer
    // under each collection
    // filter bizcards by collection id - then map the filteredCards to list <BizCard />s


     const {collection_name} = this.props.collection
     const bizcards = this.props.user.bizcards
     let collectionCards = bizcards.filter(b => b.collection_id === this.props.collection.id )
     let results = collectionCards.map(card => { return <BizCard key={card.id} card={card} /> })

     let style = {
      width: '90%',
      margin: 'auto',
      paddingTop: '25px'
    }

    return (
          <div>
            <div id="collections">
            <h2>{collection_name}</h2>
            <div style={style}>
              <Grid stackable columns={3}>
                <Grid.Row>
                  <Grid.Column>
                    {results[0]}
                  </Grid.Column>
                  <Grid.Column>
                    {results[1]}
                  </Grid.Column>
                  <Grid.Column>
                    {results[2]}
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    {results[3]}
                  </Grid.Column>
                  <Grid.Column>
                    {results[4]}
                  </Grid.Column>
                  <Grid.Column>
                    {results[5]}
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    {results[6]}
                  </Grid.Column>
                  <Grid.Column>
                    {results[7]}
                  </Grid.Column>
                  <Grid.Column>
                    {results[8]}
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    {results[9]}
                  </Grid.Column>
                  <Grid.Column>
                    {results[10]}
                  </Grid.Column>
                  <Grid.Column>
                    {results[11]}
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    {results[12]}
                  </Grid.Column>
                  <Grid.Column>
                    {results[13]}
                  </Grid.Column>
                  <Grid.Column>
                    {results[14]}
                  </Grid.Column>
                </Grid.Row>

              </Grid>
              </div>
            </div>
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
