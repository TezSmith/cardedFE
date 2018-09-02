import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import textReducer from './textReducer'

const rootReducer = combineReducers({
  text: textReducer,
  form: formReducer
})

export default rootReducer
