import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const logger = createLogger()
const middleware = applyMiddleware(promise, thunk)

const store = createStore(persistedReducer, composeWithDevTools(middleware))
const persistor = persistStore(store)


export { store, persistor }
