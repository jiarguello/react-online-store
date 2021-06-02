import React from 'react';
import { Link } from 'react-router-dom';
import ListOfCategories from '../Components/ListOfCategories';
import SearchBar from '../Components/SearchBar';
import ProductCard from '../Components/ProductCard';
import * as api from '../services/api';
import * as S from '../CSS/S.Home';
import Cart from '../Images/carrinho.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      productsList: [],
      categories: [],
      hidden: true,
      toggle: false,
    };
    this.addItemCart = this.addItemCart.bind(this);
    this.fetchApiSearch = this.fetchApiSearch.bind(this);
    this.fetchByCategoryId = this.fetchByCategoryId.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('shoppingCart')) {
      localStorage.setItem('shoppingCart', JSON.stringify([]));
    }
    api.getCategories()
      .then((response) => this.setState({ categories: response }));
  }

  addItemCart(product) {
    const currentCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const isOnCart = currentCart.some((item) => item.id === product.id);
    if (isOnCart) {
      currentCart.find((elem) => {
        if (elem.id === product.id) {
          const { quantity, available_quantity: availableQuantity } = elem;
          if (quantity < availableQuantity) {
            elem.quantity = quantity + 1;
            localStorage.setItem('shoppingCart', JSON.stringify(currentCart));
          }
        }
      });
    } else {
      product.quantity = 1;
      const newCart = [...currentCart, product];
      localStorage.setItem('shoppingCart', JSON.stringify(newCart));
    }
  }

  async fetchApiSearch() {
    const { searchText } = this.state;
    const fetchList = await api.getProductsFromCategoryAndQuery('', searchText);

    if (!fetchList.results.length) {
      this.setState({
        showMessage: true,
      });
    } else {
      this.setState({
        productsList: fetchList.results,
        showMessage: false,
      });
    }
  }

  async fetchByCategoryId(categoryId) {
    const fetchList = await api.getProductsFromCategoryAndQuery(categoryId, '');
    this.setState({
      productsList: fetchList.results,
    });
  }

  handleSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  handleChange() {
    const { hidden } = this.state;
    this.setState({ hidden: !hidden });
  }

  toggle(product) {
    const { toggle } = this.state;
    this.addItemCart(product);
    this.setState({ toggle: !toggle });
  }

  render() {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const { productsList, showMessage, categories, hidden } = this.state;
    const emptySearchMessage = <p>Nenhum produto foi encontrado</p>;
    return (
      <S.Main>
        <S.Header>
          <S.ButtonMenu
            type="button"
            onClick={ this.handleChange }
          >
          </S.ButtonMenu>
          <SearchBar
            onSearchTextChange={ this.handleSearchTextChange }
            onClickSearch={ this.fetchApiSearch }
          />
          <S.Div>
            <Link to="/shopping-cart">
              <S.Span>{ shoppingCart !== null ? shoppingCart.length : 0 }</S.Span>
              <S.CartIMG src={ Cart } alt="shopping cart" />
            </Link>
          </S.Div>
        </S.Header>
        <ListOfCategories
          categories={ categories }
          hidden={ hidden }
          onClickSelectedCategory={ this.fetchByCategoryId }
        />
        {
          showMessage ? emptySearchMessage : <ProductCard
            products={ productsList }
            toggle={ this.toggle }
          />
        }
      </S.Main>
    );
  }
}

export default Home;
