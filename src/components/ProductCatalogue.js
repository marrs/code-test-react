import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const ProductCatalogue = (props) => {
    let { addToBasket, productData } = props;
    return <div className="productCatalogue">
        { productData.map((item, idx) => {
            return <div key={idx} className="productCatalogueItem"><Product addToBasket={addToBasket} { ...item } /></div>
        })};
    </div>
};

export default ProductCatalogue;
