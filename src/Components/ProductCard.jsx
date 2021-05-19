import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { products, onClick, cartItens } = this.props;
    const isFreeShipping = <span>Frete Gratis!</span>;
    return (
      <div className="pai">
        {
          products
            .map(({
              id,
              title,
              thumbnail,
              price,
              category_id: categoryId,
              shipping: { free_shipping: freeShipping },
            }) => (
              <div key={ id }>
                <p>{ title }</p>
                <img src={ thumbnail } alt="produto" />
                <p>{ price }</p>
                { (freeShipping) ? isFreeShipping : '' }
                <button
                  type="button"
                  onClick={ () => onClick(id) }
                >
                  Comprar
                </button>
                <Link
                  to={ {
                    pathname: `product-detail/${categoryId}/${id}`,
                    state: [...cartItens],
                  } }
                >
                  Ver detalhes
                </Link>
              </div>))
        }
      </div>
    );
  }
}

ProductCard.propTypes = {
  cartItens: PropTypes.arrayOf().isRequired,
  products: PropTypes.arrayOf().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
