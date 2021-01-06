import { connect } from 'react-redux';
import CartListItem from './CartListItem';
// import { updateCartProduct } from '../../../../../redux/stores/cart/cartOperations';
import cartActions from '../../../../../redux/stores/cart/cartAction';

const mapDispatchToProps = dispatch => {
  return {
    updateCartProduct: data =>
      dispatch(cartActions.updateProductCartStart(data)),
  };
};

const CartListItemContainer = connect(null, mapDispatchToProps)(CartListItem);

export default CartListItemContainer;
