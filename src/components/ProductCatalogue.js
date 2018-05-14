import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import ProductCatalogueItem from './ProductCatalogueItem';
import LoadMoreBeers from '../containers/LoadMoreBeers';

const ProductCatalogue = (props) => {
    let { addToBasket, productData } = props;
    return <div className="productCatalogue">
        { productData.map((item, idx) => {
            return <ProductCatalogueItem key={idx}>
                <Product addToBasket={addToBasket} { ...item } />
            </ProductCatalogueItem>
        }).concat([
            <ProductCatalogueItem key={productData.length +1}>
                <LoadMoreBeers />
            </ProductCatalogueItem>
        ])}
    </div>
};

export default ProductCatalogue;
