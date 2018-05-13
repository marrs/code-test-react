import React from 'react';
import PropTypes from 'prop-types';

const BeerItem = (props) => {
    return <div className="beerItem">
        <img className="beerItemImage" alt="" src={props.imageUrl}/>
        <div className="beerItemInfo">
            <h3 className="beerItemTitle">{props.name}</h3>
            <h4 className="beerItemTagline">{props.tagline}</h4>
            <p className="description">{props.description}</p>
            <p className="beerItemAbv">{`${props.abv}% ABV`}</p>
            <button className="cta">Add to basket</button>
        </div>
    </div>

}

export default BeerItem;

BeerItem.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
