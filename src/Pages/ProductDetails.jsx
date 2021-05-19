import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RatingForm from '../Components/RatingForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const currentProduct = JSON.parse(localStorage.getItem('currentItem'));
    const isOnCart = shoppingCart.some((product) => product.id === currentProduct.id);
    if (isOnCart) {
      currentProduct.quantity = 1;
      const newCart = [...shoppingCart, currentProduct];
      localStorage.setItem('shoppingCart', JSON.stringify(newCart));
    } else {
      
    }
  }

  render() {
    const product = JSON.parse(localStorage.getItem('currentItem'));
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const { title, thumbnail, price } = product;
    return (
      <div>
        <p>
          { `${title} - R$ ${price}` }
        </p>
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
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
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
