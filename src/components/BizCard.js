import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteCard, updateCard} from '../actions'
import { Button } from 'semantic-ui-react'

class BizCard extends Component {

  state = {
    isEdit: false,
    id: this.props.card.id,
    card_name: this.props.card.card_name || this.props.card["card-name"],
    line1: this.props.card.line1,
    line2: this.props.card.line2,
    line3: this.props.card.line3,
    line4: this.props.card.line4,
    line5: this.props.card.line5
  }

  handleEdit = (e) => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  editCard = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    },() => console.log(this.state))
  }

  sendEdit = () => {
    let values = {
      ...this.state
    }
    
    //removes the isEdit & id key
    delete values.isEdit
    delete values.id 
    
    let id = this.state.id 
    this.props.updateCard(id, values)
    this.handleEdit()
    
  }

  render(){

    const { card_name, line1, line2, line3, line4, line5, id } = this.state

    let noEdit = () => {
      return (<div id="cardText">
        <h4>{card_name}</h4>
        <p>{line1}</p>
        <p>{line2}</p>
        <p>{line3}</p>
        <p>{line4}</p>
        <p>{line5}</p>
        <a href="#" onClick={() => { this.props.deleteCard(id) }}> Delete Card </a>
        <a href="#" onClick={(e) => this.handleEdit(e)}> Edit Card </a>
      </div>)
    }

    let edit = () => {
      return (
        <div id="cardText">
        <input type="text" name="card_name" placeholder={card_name} onBlur={(e) => this.editCard(e)}></input><br/>
          <input type="text" name="line1" placeholder={line1} onBlur={(e) => this.editCard(e)}></input><br/>
          <input type="text" name="line2" placeholder={line2} onBlur={(e) => this.editCard(e)}></input><br/>
          <input type="text" name="line3" placeholder={line3} onBlur={(e) => this.editCard(e)}></input><br/>
          <input type="text" name="line4" placeholder={line4} onBlur={(e) => this.editCard(e)}></input><br/>
          <input type="text" name="line5" placeholder={line5} onBlur={(e) => this.editCard(e)}></input> <br/>
          <Button onClick={this.sendEdit} color="teal">Update Card</Button>
        </div>
      )
    }

    return (
         
        <div className="bizcard">
         {this.state.isEdit ? edit() : noEdit()}
        </div>

    )
  }
}



export default connect(null, {deleteCard, updateCard})(BizCard)
