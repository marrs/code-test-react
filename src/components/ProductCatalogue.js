import React from 'react';
import PropTypes from 'prop-types';

import BeerItem from './BeerItem';

const ProductCatalogue = (props) => {
    return <div className="productCatalogue">
        { props.items.map((item, idx) => {
            return <div className="productCatalogueItem"><BeerItem key={idx} {...item} /></div>
        })};
    </div>
};

export default ProductCatalogue;
