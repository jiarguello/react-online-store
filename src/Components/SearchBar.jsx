import React from 'react';
import PropTypes from 'prop-types';
import * as S from '../CSS/S.SearchBar';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, onClickSearch } = this.props;
    return (
      <S.Div>
        <S.Input
          type="text"
          onChange={ onSearchTextChange }
          name="search"
          placeholder="Digite aqui seu produto..."
        />
        <S.SearchButton
          type="button"
          onClick={ onClickSearch }
        >
          Buscar
        </S.SearchButton>
      </S.Div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onClickSearch: PropTypes.func.isRequired,
};

export default SearchBar;
