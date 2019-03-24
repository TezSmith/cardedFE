import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer';

// const logger = createLogger()
const middleware = applyMiddleware(promise, thunk)

const store = createStore(rootReducer, composeWithDevTools(middleware))

export default store
