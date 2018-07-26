import "babel-polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, compose, createStore} from "redux"
import rootReducers from "./reducers"
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

const store = createStore(rootReducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {
  }
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
