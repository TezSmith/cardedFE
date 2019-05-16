import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { InputField } from 'react-semantic-redux-form';
import { Header, Button, Form, Grid, Segment, Image} from 'semantic-ui-react'
import carded from '../Homepage1.jpg'

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
        <Image src={carded} className="welcomeLogo"/>
        <Header as='h3' textAlign='center'>
          Save Your Cards. Not The Clutter.
        </Header>
       <Form onSubmit={handleSubmit}>
         <Segment stacked>
          <h4><Field type="name" name="name" component={InputField} placeholder="Name"/></h4>
          <h4><Field type="username" name="username" component={InputField} placeholder="Username"/></h4>
          <h4><Field type="password" name="password" component={InputField} placeholder="Password" /></h4>
          <h4><Field type="password_confirmation" name="password_confirmation" component={InputField} placeholder="Password Confirmation" /></h4>
          <Button type="submit" value="submit" color="teal" fluid size="large">Signup</Button>
          <br/>
          <a onClick={toggleSignup}>Already Have An Account?</a>
          </Segment>
       </Form>

     </Grid.Column>
   </Grid>
 </div>

  )

}

export default connect(null)( reduxForm({ form: 'signupform'})(SignupForm) )
