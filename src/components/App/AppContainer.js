import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { error } from '../../redux/selectors';
import ErrorNotification from '../ErrorNotification/ErrorNotification';

const AppContainer = ({ errorText }) => {
  if (errorText) {
    return <ErrorNotification error={errorText} />;
  }
  return <App />;
};

const mapStateToProps = state => ({
  errorText: error(state),
});

export default connect(mapStateToProps, null)(AppContainer);
