import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const ProductCatalogue = (props) => {
    let { addToBasket, productData } = props;
    return <div className="productCatalogue">
        { props.items.map((item, idx) => {
            return <div key={idx} className="productCatalogueItem"><Product { ...item } /></div>
        })};
    </div>
};

export default ProductCatalogue;
