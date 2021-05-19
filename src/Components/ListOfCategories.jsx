import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import * as S from '../CSS/S.ListOfCategories';

class ListOfCategories extends React.Component {
  render() {
    const { categories, onClickSelectedCategory } = this.props;
    if (categories === 0) return <Loading />;
    return (
      <div>
        <p>Categorias</p>
        <ul>
        {
          categories.map(({ id, name }) => (
            <S.LI
            onClick={ () => onClickSelectedCategory(id) }
            key={ id }
            type="button"
            value={ name }
            >
              { name }
            </S.LI>
          ))
        }
        </ul>
      </div>
    );
  }
}

ListOfCategories.propTypes = {
  categories: PropTypes.arrayOf().isRequired,
  onClickSelectedCategory: PropTypes.func.isRequired,
};

export default ListOfCategories;
