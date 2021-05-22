import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrentProduct = this.setCurrentProduct.bind(this);
  }

  setCurrentProduct(product) {
    localStorage.setItem('currentItem', JSON.stringify(product));
  }

  render() {
    const { products, onClick, cartItens } = this.props;
    const isFreeShipping = <span>Frete Gratis!</span>;
    return (
      <div className="pai">
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
                <div className="product" data-testid="product" key={ id }>
                  <p>{ title }</p>
                  <img src={ thumbnail } alt="produto" />
                  <p>{ price }</p>
                  { (freeShipping) ? isFreeShipping : '' }
                  <button
                    data-testid="product-add-to-cart"
                    type="button"
                    onClick={ () => onClick(element) }
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
              </div>
              )
            })
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
