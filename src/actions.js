function createFetchActionTypes(type) {
    return {
        request: type + '_REQUEST',
        success: type + '_SUCCESS',
        failure: type + '_FAILURE',
    };
}

function assertArgsExist(functionName, err) {
    Object.keys(err).forEach(key => {
        if (!err[key]) {
            throw new Error(`${key} is a required property for 1st arg of ${functionName}`)
        }
    });
}

const FETCH_BEERS_ACTION = 'FETCH_BEERS';
export const FETCH_BEERS = Object.freeze(createFetchActionTypes(FETCH_BEERS_ACTION));

export const fetchBeers = (data) => {
    return {
        type: FETCH_BEERS_ACTION,
        $payload: {
            url: `https://api.punkapi.com/v2/beers?page=${data.page}&per_page=10`,
            options: { cache: "force-cache" } // XXX Prevents me from overloading API with too many requests
        }
    };
}

export const TOGGLE_GRID = 'TOGGLE_GRID';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';

export const addToBasket = ({ productId, name, qty }) => {
    assertArgsExist('addToBasket', { productId, name, qty });
    return function(dispatch) {
        dispatch({
            type: ADD_TO_BASKET,
            data: { productId, name, qty}
        });
    }
}
