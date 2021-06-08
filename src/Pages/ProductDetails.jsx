import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RatingForm from '../Components/RatingForm';
import { localeCurrency } from '../services/helpers';
import * as S from '../CSS/S.ProductDetails';
import CartImg from '../Images/carrinho.png';
import SearchBar from '../Components/SearchBar';

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
    console.log(product);
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const { title, thumbnail, price } = product;
    return (
      <S.Div>
        <S.H3>{ `${title} - ${localeCurrency(price)}` }</S.H3>
        <S.Main>
          <S.Section>
            <img style={ { height: '200px' }} src={ thumbnail } alt="product-thumbnail" />
            <p>OLA ESTRANHO</p>
          </S.Section>
          <S.Aside>
            <Link
              style={ { 'text-decoration': 'none' } }
              to="/shopping-cart"
            >
              <S.Button type="button">
                Ir para carrinho
                <S.DivButton>
                  <S.CartImg
                    src={ CartImg }
                    alt="shopping-cart img"
                  />
                  <S.Span>{ shoppingCart.length }</S.Span>
                </S.DivButton>
              </S.Button>
            </Link>
            <S.Button
              type="button"
              onClick={ this.toggle }
              >
              Adicionar ao Carrinho
            </S.Button>
            <RatingForm />
          </S.Aside>
        </S.Main>
      </S.Div>
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
