import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'


const CardForm = (props) => {
  const { handleSubmit, line1, line2, line3, line4, line5 } = props

    return (
        <form onSubmit={handleSubmit}>
           <h4>Name Your Card: <Field type="text" name="card_name" component="input" placeholder="Card Name"/></h4>
           <h4>Line 1: <Field type="text" name="line1" component="input" placeholder={line1}/></h4>
           <h4>Line 2: <Field type="text" name="line2" component="input" placeholder={line2}/></h4>
           <h4>Line 3: <Field type="text" name="line3" component="input" placeholder={line3}/></h4>
           <h4>Line 4: <Field type="text" name="line4" component="input" placeholder={line4}/></h4>
           <h4>Line 5: <Field type="text" name="line5" component="input" placeholder={line5}/></h4>
           <h4>Add To Collection:
              <Field name="collection_name" component="select">
                <option defaultValue="misc">Miscellaneous</option>
                <option value="employers">Employers</option>
                <option value="partners">Partners</option>
                <option value="creatives">Creatives</option>
              </Field>
           </h4>
           <button type="submit" value="submit">Save Card</button>
        </form>
    )
}

const mapStateToProps = (state) => {
  return {
    current_user: {id: state.text.current_user.id},
    imgData: state.text.imgData,
    line1: state.text.line1,
    line2: state.text.line2,
    line3: state.text.line3,
    line4: state.text.line4,
    line5: state.text.line5,
    card_name: state.text.card_name,
    collection_name: state.text.collection_name
  }
}

const GetCard = connect(mapStateToProps)(CardForm)

export default reduxForm({ form: 'cardform'})(GetCard)
