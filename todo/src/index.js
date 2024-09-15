import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer"

ReactDOM.render(
  
  <Provider store={createStore(reducer, 
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
     <App />
  </Provider>, 
  document.getElementById('root')
);


serviceWorker.unregister();
