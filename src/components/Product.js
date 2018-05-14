import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {

    function handle_cta_click(e) {
        props.addToBasket({
            productId: props.id,
            name: props.name,
            qty: 1
        });
    }

    return <div className="product">
        <img className="productImage" alt="" src={props.imageUrl}/>
        <div className="productInfo">
            <h3 className="productTitle">{props.name}</h3>
            <h4 className="productTagline">{props.tagline}</h4>
            <p className="productAbv">{`${props.abv}% ABV`}</p>
            <p className="productDescription">{props.description}</p>
            <button className="cta" onClick={handle_cta_click}>Add to basket</button>
        </div>
    </div>

}

export default Product;

Product.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
