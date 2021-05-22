import React from 'react';
import PropTypes from 'prop-types';

class OrderSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      submit: false,
    };
    this.productsReview = this.productsReview.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.inputsGenerator = this.inputsGenerator.bind(this);
    this.paymentMethodInputs = this.paymentMethodInputs.bind(this);
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
    const { totalPrice } = this.state;
    return (
      <div>
        <h1>Revise seus Produtos</h1>
        {
          order.map(({ title, thumbnail, quantity, id, price }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ `foto ${title}` } />
              <span>{ title }</span>
              <span>
                R$
                { price * quantity }
              </span>
            </div>
          ))
        }
        <p>
          Preço Total: R$
          { totalPrice }
        </p>
      </div>
    );
  }

  totalPrice() {
    const order  = JSON.parse(localStorage.getItem('shoppingCart'));
    const total = order
      .reduce((acc, product) => acc + (product.price * product.quantity), 0);
    this.setState({
      totalPrice: total,
    });
  }

  inputsGenerator(type, name, placeholder, labelText) {
    return (
      <label htmlFor={ `${name}-input` }>
        { labelText }
        <input
          type={ type }
          name={ name }
          id={ `${name}-input` }
          placeholder={ placeholder }
          required
        />
      </label>
    )
  }

  paymentMethodInputs(id, labelText, value) {
    return (
      <label htmlFor={ id }>
        { labelText }
        <input
          id={ id }
          type="radio"
          name="payment"
          value={ value }
        />
      </label>
    );
  }

  renderForm() {
    return (
      <form>
        <div>
          { this.inputsGenerator('text', 'name', 'Nome completo', 'Digite seu nome completo') }
          { this.inputsGenerator('text', 'CPF', 'CPF', 'Digite seu CPF') }
          { this.inputsGenerator('text', 'email', 'E-mail', 'Digite seu E-mail') }
          { this.inputsGenerator('text', 'telefone', 'Telefone', 'Digite seu Telefone') }
          { this.inputsGenerator('text', 'CEP', 'CEP', 'Digite seu CEP') }
          { this.inputsGenerator('text', 'address', 'Endereço', 'Digite seu Endereço') }
        </div>
        <div>
          <div>
            <h5>Boleto</h5>
            { this.paymentMethodInputs('boleto', 'Boleto', 'boleto') }
          </div>
          <div>
            <h5>Cartão de crédito</h5>
            { this.paymentMethodInputs('visa', 'Visa', 'visa') }
            { this.paymentMethodInputs('mastercard', 'Mastercard', 'mastercard') }
            { this.paymentMethodInputs('elo', 'Elo', 'elo') }
          </div>
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
