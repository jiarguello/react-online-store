import React from 'react';
import PropTypes from 'prop-types';
import { localeCurrency, inputsGenerator, paymentMethodInputs } from '../services/helpers';

class OrderSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
    };
    this.productsReview = this.productsReview.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.submitPurchase = this.submitPurchase.bind(this);
  }

  submitPurchase() {
    if (localStorage.getItem('shoppingCart')) {
      localStorage.clear();
      this.setState({
        submit: true,
      });
    }
  }

  productsReview() {
    const order = JSON.parse(localStorage.getItem('shoppingCart'));
    return (
      <div>
        <h1>Revise seus Produtos</h1>
        {
          order
            .map(({ title, thumbnail, quantity, id, price }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ `foto ${title}` } />
              <p>{ title } - { localeCurrency(price * quantity) }.</p>
            </div>
          ))
        }
        <p>Preço Total: { this.totalPrice() }.</p>
      </div>
    );
  }

  totalPrice() {
    const order  = JSON.parse(localStorage.getItem('shoppingCart'));
    const total = order
      .reduce((acc, product) => acc + (product.price * product.quantity), 0);
    return localeCurrency(total);
  }

  renderForm() {
    return (
      <form>
        <div>
          <p>Digite seus dados abaixo</p>
          { inputsGenerator('text', 'name', 'Nome completo') }
          { inputsGenerator('number', 'CPF', 'CPF') }
          { inputsGenerator('text', 'email', 'E-mail') }
          { inputsGenerator('number', 'telefone', 'Telefone') }
          { inputsGenerator('number', 'CEP', 'CEP') }
          { inputsGenerator('text', 'address', 'Endereço') }

          <h5>Boleto</h5>
          { paymentMethodInputs('boleto') }

          <h5>Cartão de crédito (selecione a bandeira)</h5>
          { paymentMethodInputs('visa') }
          { paymentMethodInputs('mastercard') }
          { paymentMethodInputs('elo') }
        </div>
        <button
          type="button"
          onClick={ this.submitPurchase }
        >
          Finalizar a Compra!
        </button>
      </form>
    );
  }

  render() {
    const { submit } = this.state;
    const submitted = <h1>Obrigado por comprar conosco!</h1>;
    return (
      <div>
        { !submit && this.productsReview() }
        { !submit && this.renderForm() }
        { submit && submitted }
      </div>
    );
  }
}

OrderSummary.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
};

export default OrderSummary;
