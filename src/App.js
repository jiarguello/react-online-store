import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductDetails';
import OrderSummary from './Pages/OrderSummary';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/product-detail/:categoryID/:id" component={ ProductDetails } />
          <Route path="/order-summary" component={ OrderSummary } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
