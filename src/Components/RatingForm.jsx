import React from 'react';
import * as S from '../CSS/S.RatingForm';

class RatingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      rating: 0,
      comment: '',
    };
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, rating, comment } = this.state;
    return (
      <S.Div>
        <S.Form>
          <S.Label htmlFor="email-input">
            Email
            <S.Input
              type="email"
              required
              placeholder="Digite seu email aqui..."
              value={ email }
              onChange={ (event) => this.handleChange('email', event.target.value) }
            />
          </S.Label>
          <S.Label htmlFor="rating-input">
            Avaliação
            <S.Input
              type="number"
              min={ 0 }
              max={ 5 }
              step={ 0.1 }
              value={ rating }
              onChange={ (event) => this.handleChange('rating', event.target.value) }
            />
          </S.Label>
          <S.Label htmlFor="comment-input">
            Comentários
            <S.Textarea
              placeholder="Escreva aqui o que achou do produto..."
              value={ comment }
              rows="5"
              cols="20"
              onChange={ (event) => this.handleChange('comment', event.target.value) }
            />
          </S.Label>
          <S.Button type="button">
            Enviar Avaliação
          </S.Button>
        </S.Form>
      </S.Div>
    );
  }
}

export default RatingForm;
