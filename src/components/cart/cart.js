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

  addToCart(newItem) {
    let itemExisted = false;
    let updatedCart = this.context.cart.map(item => {
      if (newItem === item.sku) {
        itemExisted = true;
        return { sku: item.sku, quantity: ++item.quantity };
      } else {
        return item;
      }
    });
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newItem, quantity: 1 }];
    }
    this.context.setCart(updatedCart);
    // Store the cart in the localStorage.
    localStorage.setItem('stripe_checkout_items', JSON.stringify(updatedCart));
  }

  render() {
    return (
      <div>
        <Checkout cart={this.context.cart} />
        {React.cloneElement(this.props.children, {
          addToCart: this.addToCart.bind(this),
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
