import React from 'react';
import { Route, Link } from 'react-router-dom';

import * as Components from '../';
import IsolateComponent from './IsolateComponent';

const beerItemStub = {
    id: 1,
    name: "Pilsen Lager",
    imageUrl: "https://images.punkapi.com/v2/4.png",
    abv: "5.0",
    tagline: "A Real Bitter Experience.",
    description: "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    firstBrewed: "09/2007",
    foodPairing:[
        "Spicy chicken tikka masala","Grilled chicken quesadilla","Caramel toffee cake"
        ],
    brewersTips: "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus."
};

function componentsList(components) {
    return Object.keys(components).map((componentName, idx) => {
        let Component = Components[componentName];
        let props = components[componentName];
        return <div key={`component-${idx}`} className="devComponent">
            <h3><Link to={`/dev/components/${componentName}?props=${JSON.stringify(props)}`}>{componentName}</Link></h3>
            <Component {...props} />
        </div>
    });
}

const Dev = (props) => {
    let { match } = props;
    let currentPath = match.path;
    return <div>
        <Route exact path={`${currentPath}/components/:name`} component={IsolateComponent} />
        { match.isExact && <h2 key="component-title">Components</h2> }
        { match.isExact && componentsList({
            Product: beerItemStub,
            ProductCatalogue: {
                items: Array(10).fill(beerItemStub)
            }
        }) }
    </div>
}

export default Dev;
