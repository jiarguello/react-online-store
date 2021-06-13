import React from 'react';
import PropTypes from 'prop-types';
import { localeCurrency, inputsGenerator, paymentMethodInputs } from '../services/helpers';
import * as S from '../CSS/S.OrderSummary';

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
      <S.SectionProducts>
        <S.H1>Revise seus Produtos</S.H1>
        <S.DivProducts>
          {
            order
              .map(({ title, thumbnail, quantity, id, price }) => (
              <S.DivCard key={ id }>
                <img style={ { 
                    height: "auto", "max-height": "25vh",
                    "width": "20%", "max-width": "20%",
                    "border-radius": "10%",
                  } } src={ thumbnail } alt={ `foto ${title}` } />
                <S.DivP>
                  <S.Ptitle>{ title }</S.Ptitle>
                  <S.Pprice>{ localeCurrency(price * quantity) }</S.Pprice>
                </S.DivP>
              </S.DivCard>
            ))
          }
        </S.DivProducts>
        <S.Ptotal>Preço Total: { this.totalPrice() }.</S.Ptotal>
      </S.SectionProducts>
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
      <S.SectionPayment>
        <S.Form>
          <S.H3Form>Digite seus dados abaixo</S.H3Form>
          { inputsGenerator('text', 'name', 'Nome completo') }
          { inputsGenerator('number', 'CPF', 'CPF') }
          { inputsGenerator('text', 'email', 'E-mail') }
          { inputsGenerator('number', 'telefone', 'Telefone') }
          { inputsGenerator('number', 'CEP', 'CEP') }
          { inputsGenerator('text', 'address', 'Endereço') }
        </S.Form>

        <S.DivPayment>
          <S.H5>Selecione o método de pagamento</S.H5>
          <S.DivBankSlip>
          { paymentMethodInputs('boleto') }
          </S.DivBankSlip>

          <S.H5>Cartão de crédito (selecione a bandeira)</S.H5>
          <S.DivCreditCard>
            { paymentMethodInputs('visa') }
            { paymentMethodInputs('mastercard') }
            { paymentMethodInputs('elo') }
          </S.DivCreditCard>

          <S.ButtonFinish
            type="button"
            onClick={ this.submitPurchase }
          >
            Finalizar a Compra!
          </S.ButtonFinish>
        </S.DivPayment>
      </S.SectionPayment>
    );
  }

  render() {
    const { submit } = this.state;
    const submitted = <h1>Obrigado por comprar conosco!</h1>;
    return (
      <S.Main>
        { !submit && this.productsReview() }
        { !submit && this.renderForm() }
        { submit && submitted }
      </S.Main>
    );
  }
}

OrderSummary.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
};

export default OrderSummary;
