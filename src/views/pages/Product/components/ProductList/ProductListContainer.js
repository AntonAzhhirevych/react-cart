import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import {
  product,
  loading,
  error,
  getTotalPriceCart,
} from '../../../../../redux/selectors/selectors';
import getProductList from '../../../../../redux/stores/product/productOperations';
import { getCartProduct } from '../../../../../redux/stores/cart/cartOperations';
import Loader from '../../../../components/Loader/Loader';

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

const mapDispatchToProps = {
  getProductList,
  getCartProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListContainer);
