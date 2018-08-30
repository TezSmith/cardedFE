import React, { Component } from 'react'
import {connect} from 'react-redux'
import {convertImg} from '../actions'

class NewCard extends Component {

  render() {


    return (
      <div>
        <img src={this.props.imgData} alt=""/>
        <br/>
        <h3>{this.props.parsedText}</h3>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    imgData: state.imgData,
    parsedText: state.parsedText
  }
}

export default connect(mapStateToProps, {convertImg})(NewCard)
