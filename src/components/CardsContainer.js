import React, {Component} from 'react'
import BizCard from './BizCard'
// import CollectionContainer from './CollectionContainer'
import {connect} from 'react-redux'
import { Grid } from 'semantic-ui-react'

class CardsContainer extends Component {

  render() {

      let bizcards = this.props.user.bizcards
      let results = bizcards.map(card => <BizCard key={card.id} card={card}/>)
      // let newCard = this.props.user.bizcards.pop()

      // let collectionCards = bizcards.filter(b => b.collection_id === this.props.collection.id)
      // let results = collectionCards.map(card => <BizCard key={card.id} card={card}/>)

      let style = {
        width: '90%',
        margin: 'auto',
        paddingTop: '25px'
      }

    return (
      <div className = "cardsCont">
      <h2 id="mycards">My Cards</h2>

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
     )
  }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, bizcards: state.text.user.bizcards, collections: state.text.user.collections }
  }
}

export default connect(mapStateToProps)(CardsContainer)
