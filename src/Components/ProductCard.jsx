import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from '../CSS/S.ProductCard';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrentProduct = this.setCurrentProduct.bind(this);
  }

  setCurrentProduct(product) {
    localStorage.setItem('currentItem', JSON.stringify(product));
  }

  render() {
    const { products, addItemCart } = this.props;
    const isFreeShipping = <span>Frete Gratis!</span>;
    return (
      <S.Section>
        {
          products
            .map((element) => {
              const {
                id,
                title,
                thumbnail,
                price,
                category_id: categoryId,
                shipping: { free_shipping: freeShipping },
              } = element;
              const priceLocale = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              return (
                <S.Div key={ id }>
                  <S.P>{ title }</S.P>
                  <S.Img src={ thumbnail } alt="produto" />
                  <p>{ priceLocale }</p>
                  { (freeShipping) ? isFreeShipping : <p></p> }
                  <button
                    type="button"
                    onClick={ () => addItemCart(element) }
                  >
                    Comprar
                  </button>
                  <Link
                    to={ `product-detail/${categoryId}/${id}` }              
                  >
                    <button
                      type="button"
                      onClick={ () => this.setCurrentProduct(element) }
                    >
                      Ver detalhes
                    </button>
                  </Link>
              </S.Div>
              )
            })
        }
      </S.Section>
    );
  }
}

ProductCard.propTypes = {
  cartItens: PropTypes.arrayOf().isRequired,
  products: PropTypes.arrayOf().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
