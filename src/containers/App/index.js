import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TOGGLE_GRID } from '../../actions';
import Home from '../Home';
import Checkout from '../Checkout';
import Dev from '../../components/Dev';
import DevGrid from '../../components/Dev/Grid';

const App = (props) => (
  <div>
    <DevGrid display={props.dev.showGrid} />
    <header>
      <Link to="/">Home</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/dev">Dev</Link>
      <button className="dev-grid-button" onClick={props.toggleGrid}>Grid</button>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
      <Route path="/dev" component={Dev} />
    </main>
  </div>
);

const AppContainer = connect(
    (state) => state,
    (dispatch) => ({
        toggleGrid: () => {
            dispatch({
                type: TOGGLE_GRID
            });
        }
    })
)(App);

export default AppContainer;
