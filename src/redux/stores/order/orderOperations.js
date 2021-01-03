import axios from 'axios';
import { reset } from 'redux-form';
import orderActions from './orderActions';
import API from '../../../constants/API';

const postOrder = order => dispatch => {
  dispatch(orderActions.postOrderStart());

  return axios
    .post(API.postOrder, order)
    .then(order => dispatch(orderActions.postOrderSuccess(order)))
    .catch(error => dispatch(orderActions.postOrderError(error)))
    .finally(() => dispatch(reset('order')));
};

export default postOrder;
