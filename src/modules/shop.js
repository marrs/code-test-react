import {
    FETCH_BEERS,
    ADD_TO_BASKET
} from '../actions';

function assertPropertiesArePresent(obj, props) {
    props.forEach(prop => {
        if (!obj[prop]) {
            throw new Error("Missing property: " + prop);
        }
    });
}

const shopReducer = (state, action) => {
    switch(action.type) {
        case FETCH_BEERS.request: {
            return {
                ...state,
                isFetchingBeers: true,
            };
        }
        case FETCH_BEERS.success: {
            return {
                ...state,
                isFetchingBeers: false,
                page: action.meta.page,
                productData: state.productData.concat(action.data.map((item) => {
                    return {
                        id: item.id,
                        name: item.name,
                        tagline: item.tagline,
                        description: item.description,
                        abv: item.abv,
                        imageUrl: item.image_url
                    };
                })),
            };
        }
        case FETCH_BEERS.failure: {
            return { isFetchingBeers: false, ...state };
        }
        case ADD_TO_BASKET: {
            assertPropertiesArePresent(action.data, ['productId', 'name', 'qty']);
            let { productId, name, qty } = action.data;
            let newBasket = { ...state.basket };
            if (newBasket[productId]) {
                newBasket[productId].qty += qty;
            } else {
                newBasket[productId] = {
                    productId, name, qty
                };
            }
            return {
                ...state,
                basket: newBasket
            };
        }
        default: {
            return state || {
                page: 0,
                count: 10,
                productData: [],
                basket: {}
            };
        }
    }
}

export default shopReducer;
