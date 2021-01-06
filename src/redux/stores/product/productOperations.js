import productActions from './productActions';
import changeDataFormat from '../../../utilites/changeDataFormat';
import setLoading from '../loading/loadingOperation';
import http from '../../../REST/http';

const getProductList = () => dispatch => {
  dispatch(productActions.getProductListStart());
  dispatch(setLoading(true));
  http
    .getProduct()
    .then(product =>
      dispatch(productActions.getProductListSuccess(changeDataFormat(product))),
    )
    .catch(error => dispatch(productActions.getProductListError(error)))
    .finally(() => dispatch(setLoading(false)));
};

export default getProductList;
