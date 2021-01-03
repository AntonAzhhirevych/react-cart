import axios from 'axios';
import productActions from './productActions';
import API from '../../../constants/API';
import changeDataFormat from '../../../utilites/changeDataFormat';
import setLoading from '../loading/loadingOperation';

const getProductList = () => dispatch => {
  dispatch(productActions.getProductListStart());
  dispatch(setLoading(true));
  axios
    .get(API.getProductList)
    .then(product =>
      dispatch(productActions.getProductListSuccess(changeDataFormat(product))),
    )
    .catch(error => dispatch(productActions.getProductListError(error)))
    .finally(() => dispatch(setLoading(false)));
};

export default getProductList;
