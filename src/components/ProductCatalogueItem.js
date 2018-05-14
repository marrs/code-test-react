import React from 'react';
import PropTypes from 'prop-types';

const ProductCatalogueItem = (props) => {
    return <div className="productCatalogueItem">{props.children}</div>
};

export default ProductCatalogueItem;
