import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'

const store = createStore(reducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
