import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'


const Root = ({ store }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <App/>
    </Router>
    </PersistGate>
  </Provider>
)

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
