import {
    FETCH_BEERS,
    ADD_TO_BASKET
} from '../actions';

const beerReducer = (state, action) => {
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
                beerPage: action.data.page,
                productData: action.data.map((item) => {
                    return {
                        id: item.id,
                        name: item.name,
                        tagline: item.tagline,
                        description: item.description,
                        abv: item.abv,
                        imageUrl: item.image_url
                    };
                }),
            };
        }
        case FETCH_BEERS.failure: {
            console.log('FAILED TO FETCH BEERS', action);
            return { isFetchingBeers: false, ...state };
        }
        case ADD_TO_BASKET: {
            console.log("ADD TO BASKET", action);
        }
        default: {
            return state || {
                page: 0,
                count: 10,
                productData: []
            };
        }
    }
}

export default beerReducer;
