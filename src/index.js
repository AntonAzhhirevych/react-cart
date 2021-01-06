import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// connected-react-router
// change react-router-dom to connected-react-router
// also need to get history object from the middleware
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/middleware/enhancer';
//
import App from './views/App/AppContainer';
import store from './redux/stores/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root'),
);
