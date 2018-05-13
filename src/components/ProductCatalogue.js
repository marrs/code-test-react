import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const ProductCatalogue = (props) => {
    return <div className="productCatalogue">
        { props.items.map((item, idx) => {
            return <div className="productCatalogueItem"><Product key={idx} {...item} /></div>
        })};
    </div>
};

export default ProductCatalogue;
