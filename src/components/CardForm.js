import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {handleChange} from '../actions'


const CardForm = (props) => {
  const { handleSubmit, line1, line2, line3, line4, line5, card_name} = props

//   handleChange = (e) => {
//   // If you are using babel, you can use ES 6 dictionary syntax
//   // let change = { [e.target.name] = e.target.value }
//   let change = {}
//   change[e.target.name] = e.target.value
//   this.setState(change)
// }

    return (
      <form onSubmit={handleSubmit}>
         <h4>Name Your Card: <Field type="text" name="card_name" component="input" placeholder="Card Name"/></h4>
         <h4>Line 1: <Field type="text" name="line1" component="input" placeholder={line1} /></h4>
         <h4>Line 2: <Field type="text" name="line2" component="input" placeholder={line2} /></h4>
         <h4>Line 3: <Field type="text" name="line3" component="input" placeholder={line3} /></h4>
         <h4>Line 4: <Field type="text" name="line4" component="input" placeholder={line4} /></h4>
         <h4>Line 5: <Field type="text" name="line5" component="input" placeholder={line5} /></h4>
         <h4>Add To Collection: <Field type="text" name="collection_name" component="input" /></h4>
         <button type="submit" value="submit">Save Card</button>
      </form>
    )
}

const mapStateToProps = (state, ownProps) => {
  return {
    current_user: {id: state.text.current_user.id},
    collection_name: state.text.collection_name,
    initialValues: {
      line1: state.text.line1,
      line2: state.text.line2,
      line3: state.text.line3,
      line4: state.text.line4,
      line5: state.text.line5,
      card_name: state.text.card_name,
      collection_name: state.text.collection_name
    }
  }
}

export default connect(mapStateToProps, {handleChange})( reduxForm({ form: 'cardform', enableReinitialize: true})(CardForm) )
