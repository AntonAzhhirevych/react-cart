import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import {
  product,
  loading,
  error,
  getTotalPriceCart,
} from '../../../../../redux/selectors/selectors';
import Loader from '../../../../components/Loader/Loader';
import productActions from '../../../../../redux/stores/product/productActions';
import cartActions from '../../../../../redux/stores/cart/cartAction';

class ProductListContainer extends Component {
  componentDidMount() {
    const { getProductList, getCartProduct } = this.props;
    getProductList();
    getCartProduct();
  }

  render() {
    const { productList, loader } = this.props;

    if (loader) {
      return <Loader />;
    }
    return (
      <>
        <ProductList items={productList} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  productList: product(state),
  loader: loading(state),
  errorMessage: error(state),
  totalPriceCart: getTotalPriceCart(state),
});

const mapDispatchToProps = dispatch => {
  return {
    getProductList: () => dispatch(productActions.getProductListStart()),
    getCartProduct: () => dispatch(cartActions.getCartListStart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListContainer);
