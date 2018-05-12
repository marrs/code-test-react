import {
    FETCH_BEERS
} from '../actions';

const beerReducer = (state, action) => {
    switch(action.type) {
        case FETCH_BEERS.request: {
            return {
                isFetchingBeers: true,
                ...state
            };
        }
        case FETCH_BEERS.success: {
            return {
                isFetchingBeers: false,
                beerPage: action.data.page,
                ...state
            };
        }
        case FETCH_BEERS.failure: {
            return { isFetchingBeers: false, ...state };
        }
        default: {
            return state || {
                page: 0,
                count: 10
            };
        }
    }
}

export default beerReducer;
