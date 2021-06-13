import React from 'react';
import * as S from '../CSS/S.OrderSummary';

export const localeCurrency = (value) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export const inputsGenerator = (type, name, placeholder) => {
  return (
    <S.Input
      type={ type }
      name={ name }
      id={ `${name}-input` }
      placeholder={ placeholder }
      required
    />
  )
}

export const paymentMethodInputs = (type) => {
  const method = wordFormater(type);
  return (
    <label htmlFor={ method }>
    { method }
    <input
      id={ method }
      type="radio"
      name="payment"
      value={ method }
    />
    </label>
  );
}

const wordFormater = (word) => {
  const lower = word.toLowerCase()
  const formated = lower[0].toUpperCase() + lower.substr(1);
  return formated
}
