import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
          Seu carrinho está vazio
        </p>
      </section>
    );
  }

  renderTotalPrice() {
    const { totalPrice } = this.state;
    return (
      <p>
        O valor total da compra: R$ { totalPrice }.
      </p>
    );
  }

  renderCheckoutButton() {
    return (
      <Link to="/order-summary">
        <button
          type="button"
        >
          Revisar Compra
        </button>
      </Link>
    );
  }

  render() {
    const listOfProducts = JSON.parse(localStorage.getItem('shoppingCart'));
    const emptyCart = this.renderEmptyCart();
    if (listOfProducts.length === 0) return emptyCart;
    return (
      <div>
        {
          listOfProducts.map(({ title, thumbnail, quantity, id, price }) => (
            <div key={ id }>
              <button
                type="button"
                onClick={ () => this.deleteProduct(id) }
              >
                X
              </button>
              <img
                src={ thumbnail }
                alt={ `foto ${title}` }
              />
              <p>{ title }</p>
              <div>
                <button
                  type="button"
                  onClick={ () => this.decreaseProductQuantity(id) }
                >
                  -
                </button>
                <p>{ quantity }</p>
                <button
                  type="button"
                  onClick={ () => this.increaseProductQuantity(id) }
                >
                  +
                </button>
                <span>R$ { price }</span>
              </div>
            </div>
          ))
        }
        { this.renderTotalPrice() }
        { this.renderCheckoutButton() }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
};

export default ShoppingCart;
