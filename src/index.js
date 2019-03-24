import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store/store'


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
)

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
