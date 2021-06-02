import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from '../CSS/S.ProductCard';
import { localeCurrency } from '../services/helpers';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrentProduct = this.setCurrentProduct.bind(this);
  }

  setCurrentProduct(product) {
    localStorage.setItem('currentItem', JSON.stringify(product));
  }

  render() {
    const { products, toggle } = this.props;
    const isFreeShipping = <span> - Frete Gratis!</span>;
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
              return (
                <S.DivContainer key={ id }>
                  <S.DivP>
                    <S.P>{ title }</S.P>
                  </S.DivP>
                    <S.DivIMG>
                      <img style={ { height: "150px", width: "auto" }} src={ thumbnail } alt="produto" />
                    </S.DivIMG>
                  <S.DivB>
                    <p>{ localeCurrency(price) } { (freeShipping) && isFreeShipping }</p>     
                    <button
                      type="button"
                      onClick={ () => toggle(element) }
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
                  </S.DivB>
              </S.DivContainer>
              )
            })
        }
      </S.Section>
    );
  }
}

ProductCard.propTypes = {
  toggle: PropTypes.arrayOf().isRequired,
  products: PropTypes.arrayOf().isRequired,
};

export default ProductCard;
