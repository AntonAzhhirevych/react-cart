import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReturnButton from './ReturnButton';

class ReturnButtonContainer extends Component {
  handleReturnButton = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return <ReturnButton handleReturnButton={this.handleReturnButton} />;
  }
}

export default withRouter(ReturnButtonContainer);
