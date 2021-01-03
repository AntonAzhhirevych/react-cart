/* eslint-disable */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './OrderForm.module.css';

class OrderForm extends Component {
  render() {
    const { handleSubmit, Input, validators, cartList } = this.props;
    return (
      <div className={styles.orderFormContainer}>
        <form className={styles.orderForm} onSubmit={handleSubmit}>
          <p className={styles.orderFormTitle}>Order Form</p>

          <Field
            className={styles.orderFormInput}
            name="name"
            type="text"
            component={Input}
            placeholder="Name ..."
            label="Username"
            validate={[
              validators.required,
              validators.maxLength15,
              validators.minLength2,
            ]}
            warn={validators.alphaNumeric}
          />
          <Field
            className={styles.orderFormInput}
            name="surname"
            type="text"
            placeholder="Surname ..."
            component={Input}
            label="Username"
            validate={[
              validators.required,
              validators.maxLength15,
              validators.minLength2,
            ]}
            warn={validators.alphaNumeric}
          />
          <Field
            className={styles.orderFormInput}
            name="email"
            type="email"
            placeholder="Email address ..."
            component={Input}
            label="Email"
            validate={[validators.required, validators.email]}
          />

          <Field
            className={styles.orderFormInput}
            name="phone"
            type="number"
            component={Input}
            placeholder="Phone number"
            label="Phone number"
            validate={[validators.required, validators.phoneNumber]}
          />
          <div>
            <button
              className={styles.orderFormButton}
              disabled={Object.keys(cartList).length === 0}
              type="submit"
            >
              Order
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default OrderForm = reduxForm({
  form: 'order',
})(OrderForm);
