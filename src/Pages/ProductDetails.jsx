import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RatingForm from '../Components/RatingForm';
import { localeCurrency } from '../services/helpers';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    }
    this.addToCart = this.addToCart.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  addToCart() {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const currentProduct = JSON.parse(localStorage.getItem('currentItem'));
    const isOnCart = shoppingCart.some((product) => product.id === currentProduct.id);
    if (isOnCart) {
      shoppingCart.find((product) => {
        if (product.id === currentProduct.id) {
          const { quantity, available_quantity: availableQuantity } = product;
          if (quantity < availableQuantity) {
            product.quantity = quantity + 1;
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
          }
        }
      });
    } else {
      currentProduct.quantity = 1;
      const newCart = [...shoppingCart, currentProduct];
      localStorage.setItem('shoppingCart', JSON.stringify(newCart));
    }
  }

  toggle() {
    const { toggle } = this.state;
    this.addToCart();
    this.setState({ toggle: !toggle });
  }

  render() {
    const product = JSON.parse(localStorage.getItem('currentItem'));
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const { title, thumbnail, price } = product;
    return (
      <div>
        <p>{ `${title} - ${localeCurrency(price)}` }</p>
        <img src={ thumbnail } alt="product-thumbnail" />
        <RatingForm />
        <Link to="/shopping-cart">
          <button type="button">
            Ir para carrinho
            <span>{ shoppingCart.length }</span>
          </button>
        </Link>
        <button
          type="button"
          onClick={ this.toggle }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryID: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
