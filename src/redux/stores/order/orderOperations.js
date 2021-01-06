import { reset } from 'redux-form';
import orderActions from './orderActions';
import http from '../../../REST/http';

const postOrder = order => dispatch => {
  dispatch(orderActions.postOrderStart());

  return http
    .postOrder(order)
    .then(order => dispatch(orderActions.postOrderSuccess(order)))
    .catch(error => dispatch(orderActions.postOrderError(error)))
    .finally(() => dispatch(reset('order')));
};

export default postOrder;
