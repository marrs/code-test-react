import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home';
import Checkout from '../Checkout';
import Dev from '../../components/Dev';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/dev">Dev</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
      <Route path="/dev" component={Dev} />
    </main>
  </div>
);

export default App;
