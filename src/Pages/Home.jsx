import React from 'react';
import { Link } from 'react-router-dom';
import ListOfCategories from '../Components/ListOfCategories';
import SearchBar from '../Components/SearchBar';
import ProductCard from '../Components/ProductCard';
import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      productsList: [],
      categories: [],
      addItem: [],
    };
    this.addItemCart = this.addItemCart.bind(this);
    this.fetchApiSearch = this.fetchApiSearch.bind(this);
    this.fetchByCategoryId = this.fetchByCategoryId.bind(this);
    this.addItemCart = this.addItemCart.bind(this);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.setCart = this.setCart.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('shoppingCart')) {
      localStorage.setItem('shoppingCart', JSON.stringify([]));
    }
    api.getCategories()
      .then((response) => this.setState({ categories: response }));
    this.setCart();
  }

  addItemCart(product) {
    const currentCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const newCart = [...currentCart, product];
    localStorage.setItem('shoppingCart', JSON.stringify(newCart));
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

  setCart() {
    if (localStorage.getItem('shoppingCart')) {
      const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
      this.setState({
        addItem: shoppingCart,
      });
    }
  }

  render() {
    const { productsList, showMessage, categories, addItem } = this.state;
    const emptySearchMessage = <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.handleSearchTextChange }
          onClickSearch={ this.fetchApiSearch }
        />
        <ListOfCategories
          categories={ categories }
          onClickSelectedCategory={ this.fetchByCategoryId }
        />
        {
          showMessage ? emptySearchMessage : <ProductCard
            products={ productsList }
            onClick={ this.addItemCart }
            cartItens={ addItem }
          />
        }
        <button type="button">
          <Link
            to={ {
              pathname: '/shopping-cart',
              state: addItem,
            } }
          >
            Carrinho { addItem.length }
          </Link>
        </button>
      </div>
    );
  }
}

export default Home;
