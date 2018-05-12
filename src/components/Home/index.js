import React from 'react';
class Home extends React.Component {
    componentDidMount() {
        // Homepage should render 10 beers via API and store them in redux
        // store.
        console.log('beerPage', this.props.page, this.props);
        this.props.fetchBeers(this.props.page + 1);
    }

    render() {
      return <div>
        <h1>Home</h1>
      </div>
    }
}

export default Home;
