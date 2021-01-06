import { applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// connected-react-router
// history(4.10.1) - you must use version up to 5.0.0
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
//
import stateValidation from './state-validation';

// create instanse
// history - a special object to control browser navigation.
// history - works cross-browser
const history = createBrowserHistory();

// create middleware
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(
  sagaMiddleware,
  reduxThunk,
  stateValidation,
  routerMiddleware,
);

export { enhancer, sagaMiddleware, history };
