import { connect } from 'react-redux';
import CartListItem from './CartListItem';
import { updateCartProduct } from '../../../../../redux/stores/cart/cartOperations';

const mapDispatchToProps = {
  updateCartProduct,
};

const CartListItemContainer = connect(null, mapDispatchToProps)(CartListItem);

export default CartListItemContainer;
