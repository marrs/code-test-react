import React from 'react';
import { Route, Link } from 'react-router-dom';

import * as Components from '../';
import IsolateComponent from './IsolateComponent';

function componentsList(props) {
    return <div>
        <h2>Components</h2>
        <h3><Link to={`/dev/components/BeerItem?props=${JSON.stringify(props.BeerItem)}`}>BeerItem</Link></h3>
        <Components.BeerItem {...props.BeerItem} />
    </div>
}

const Dev = (props) => {
    let { match } = props;
    let currentPath = match.path;
    return <div>
        <Route exact path={`${currentPath}/components/:name`} component={IsolateComponent} />
        { match.isExact && componentsList({
            BeerItem: {
                name: "Pilsner Lager",
                imageUrl: "https://images.punkapi.com/v2/4.png",
                abv: "5.0",
                tagline: "A Real Bitter Experience.",
                description: "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
                firstBrewed: "09/2007",
                foodPairing:[
                    "Spicy chicken tikka masala","Grilled chicken quesadilla","Caramel toffee cake"
                ],
                brewersTips: "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus."
            }
        }) }
    </div>
}

export default Dev;
