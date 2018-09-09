import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'semantic-ui-react'
import { InputField, SelectField } from 'react-semantic-redux-form';
import {connect} from 'react-redux'

const collectionOptions = [{
  value: 'Employers', text: 'Employers'
}, {
  value: 'Partners', text: 'Partners'
}, {
  value: 'Others', text: 'Others'
}]



const CardForm = (props) => {
  const { handleSubmit, line1, line2, line3, line4, line5} = props

    return (
      <div className="formCont">
      <form onSubmit={handleSubmit}>
         <h4>Line 1: <Field type="text" name="line1" component={InputField} placeholder={line1} /></h4>
         <h4>Line 2: <Field type="text" name="line2" component={InputField} placeholder={line2} /></h4>
         <h4>Line 3: <Field type="text" name="line3" component={InputField} placeholder={line3} /></h4>
         <h4>Line 4: <Field type="text" name="line4" component={InputField} placeholder={line4} /></h4>
         <h4>Line 5: <Field type="text" name="line5" component={InputField} placeholder={line5} /></h4>
         <h4>Name Your Card: <Field type="text" name="card_name" component={InputField}/></h4>
         <h4>Add To Collection: <Field name="collection_name" component={SelectField} options={collectionOptions} /></h4>
         <Button type="submit" value="submit" color="color2">Save Card</Button>
      </form>
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: {id: state.text.user.id, username: state.text.user.username, bizcards: state.text.user.bizcards, collections: state.text.user.collections },
    initialValues: {
      user: {id: state.text.user.id, username: state.text.user.username},
      line1: state.text.line1,
      line2: state.text.line2,
      line3: state.text.line3,
      line4: state.text.line4,
      line5: state.text.line5,
      collection_name: ''
    }
  }
}

export default connect(mapStateToProps)( reduxForm({ form: 'cardform', enableReinitialize: true})(CardForm) )
