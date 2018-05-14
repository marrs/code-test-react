import React from 'react';

import ProductCatalogue from '../ProductCatalogue';

class Home extends React.Component {
    componentDidMount() {
        // Homepage should render 10 beers via API and store them in redux
        // store.
        this.props.fetchBeers(this.props.page + 1);
    }

    render() {
      return <div>
        <h1>Home</h1>
        <ProductCatalogue addToBasket={this.props.addToBasket} productData={this.props.productData} />
      </div>
    }
}

export default Home;
