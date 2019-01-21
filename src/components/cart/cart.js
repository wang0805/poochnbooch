/* eslint-disable no-debugger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkout from './checkout';

import { MyContext } from '../../store/createContext';

class Cart extends Component {
  componentDidMount() {
    // Get existing cart from localstorage if present.
    const existingCart = JSON.parse(
      localStorage.getItem('stripe_checkout_items')
    );
    if (existingCart && existingCart.length) {
      this.context.setCart(existingCart);
    }
  }

  render() {
    return (
      <div>
        <Checkout cart={this.context.cart} />
        {React.cloneElement(this.props.children, {
          addToCart: this.context.addToCart,
          cart: this.context.cart,
        })}
      </div>
    );
  }
}

Cart.propTypes = {
  children: PropTypes.node.isRequired,
};

Cart.contextType = MyContext;

export default Cart;
