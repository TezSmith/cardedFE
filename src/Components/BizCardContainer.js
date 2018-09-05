import React, {Component} from 'react'
import BizCard from './BizCard'
import {connect} from 'react-redux'

class BizCardContainer extends Component {

  render() {
      const collections = this.props.user.collections
      const bizcards = this.props.user.bizcards

    return (
          <div>
            {bizcards.map(card => { return <BizCard key={card.id} card={card} /> } )}
          </div>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections }
  }
}

export default connect(mapStateToProps)(BizCardContainer)
