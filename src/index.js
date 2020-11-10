import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
