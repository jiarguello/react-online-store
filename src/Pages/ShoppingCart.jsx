import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from '../CSS/S.ShoppingCart';
import { localeCurrency } from '../services/helpers';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
    };
    this.totalPrice = this.totalPrice.bind(this);
    this.increaseProductQuantity = this.increaseProductQuantity.bind(this);
    this.decreaseProductQuantity = this.decreaseProductQuantity.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.renderEmptyCart = this.renderEmptyCart.bind(this);
    this.renderTotalPrice = this.renderTotalPrice.bind(this);
    this.renderCheckoutButton = this.renderCheckoutButton.bind(this);
  }

  componentDidMount() {
    this.totalPrice();
  }

  totalPrice() {
    const listOfProducts = JSON.parse(localStorage.getItem('shoppingCart'));
    const total = listOfProducts
      .reduce((acc, product) => acc + (product.price * product.quantity), 0);
    this.setState({
      totalPrice: total,
    });
  }

  increaseProductQuantity(id) {
    const listOfProducts = JSON.parse(localStorage.getItem('shoppingCart'));
    const newCart = listOfProducts.map((item) => {
      const { available_quantity: availableQuantity } = item;
      if (item.id === id && availableQuantity > item.quantity) {
        item.quantity += 1;
        return item;
      }
      return item;
    });
    localStorage.setItem('shoppingCart', JSON.stringify(newCart));
    this.totalPrice();
  }

  decreaseProductQuantity(id) {
    const listOfProducts = JSON.parse(localStorage.getItem('shoppingCart'));
    const item = listOfProducts.find((product) => product.id === id);
    if (item.quantity !== 0) {
      item.quantity -= 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(listOfProducts));
    this.totalPrice();
  }

  deleteProduct(id) {
    const listOfProducts = JSON.parse(localStorage.getItem('shoppingCart'));
    const itemToRemove = listOfProducts.find((product) => product.id === id);
    const index = listOfProducts.indexOf(itemToRemove);
    listOfProducts.splice(index, 1);
    localStorage.setItem('shoppingCart', JSON.stringify(listOfProducts));
    this.totalPrice();
  }

  renderEmptyCart() {
    return (
      <section>
        <p>
          Seu carrinho est?? vazio
        </p>
      </section>
    );
  }

  renderTotalPrice() {
    const { totalPrice } = this.state;
    return (
      <p>
        O valor total da compra: { localeCurrency(totalPrice) }.
      </p>
    );
  }

  renderCheckoutButton() {
    return (
      <Link to="/order-summary">
        <S.ButtonReview
          type="button"
        >
          Revisar Compra
        </S.ButtonReview>
      </Link>
    );
  }

  render() {
    const listOfProducts = JSON.parse(localStorage.getItem('shoppingCart'));
    const emptyCart = this.renderEmptyCart();
    if (listOfProducts.length === 0) return emptyCart;
    return (
      <S.Main>
        <S.Header>
          <h1>Carrinho de Compras</h1>
        </S.Header>
        <S.SectionCards>
          {
            listOfProducts.map(({ title, thumbnail, quantity, id, price }) => (
              <S.DivCard key={ id }>
                <button
                  type="button"
                  onClick={ () => this.deleteProduct(id) }
                >
                  X
                </button>
                <img
                  style={ { 
                    height: "100px", "max-height": "100px",
                    "width": "auto", "max-width": "100px",
                    "border-radius": "10%",
                  } }
                  src={ thumbnail }
                  alt={ `foto ${title}` }
                />
                <S.Ptitle>{ title }</S.Ptitle>
                <S.DivUpDown>
                  <S.ButtonUpDown
                    type="button"
                    onClick={ () => this.decreaseProductQuantity(id) }
                  >
                    -
                  </S.ButtonUpDown>
                  <p>{ quantity }</p>
                  <S.ButtonUpDown
                    type="button"
                    onClick={ () => this.increaseProductQuantity(id) }
                  >
                    +
                  </S.ButtonUpDown>
                </S.DivUpDown>
                <p>{ localeCurrency(price) }</p>
              </S.DivCard>
            ))
          }
        </S.SectionCards>
        <S.Footer>
          { this.renderTotalPrice() }
          { this.renderCheckoutButton() }
        </S.Footer>
      </S.Main>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
};

export default ShoppingCart;
