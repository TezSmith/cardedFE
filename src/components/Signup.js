import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { InputField } from 'react-semantic-redux-form';
import { Header, Button, Form, Grid, Segment} from 'semantic-ui-react'
import carded from '../cardedv2.jpg'

const SignupForm = (props) => {
  const { handleSubmit, toggleSignup } = props

  return (

    <div className='signup-form'>

     <style>{`
       body > div,
       body > div > div,
       body > div > div > div.login-form {
         height: 100%;
       }
     `}</style>

   <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
     <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='white' textAlign='center'>
          Save Your Cards. Not The Clutter.
        </Header>
       <Form onSubmit={handleSubmit}>
         <Segment stacked>
          <h4><Field type="name" name="name" component={InputField} placeholder="Name"/></h4>
          <h4><Field type="username" name="username" component={InputField} placeholder="Username"/></h4>
          <Button type="submit" value="submit" color="color1" fluid size="large">Signup</Button>
          <br/>
          <a onClick={toggleSignup}>Already Have An Account?</a>
          </Segment>
       </Form>

     </Grid.Column>
   </Grid>
 </div>

  )

}




const mapStateToProps = (state, ownProps) => {
  return {
    user_id: state.text.user_id
  }
}

export default connect(mapStateToProps)( reduxForm({ form: 'signupform'})(SignupForm) )
