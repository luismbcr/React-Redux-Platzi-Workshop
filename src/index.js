import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/configureStore';
import  { Provider } from 'react-redux';
import { getCharacters } from "./actions/actionTypes";

store.dispatch(getCharacters());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
