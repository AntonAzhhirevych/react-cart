import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/App/AppContainer';
import store from './redux/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>,
  document.querySelector('#root'),
);
