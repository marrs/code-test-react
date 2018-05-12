function createFetchActionTypes(type) {
    return {
        request: type + '_REQUEST',
        success: type + '_SUCCESS',
        failure: type + '_FAILURE',
    };
}

const FETCH_BEERS_ACTION = 'FETCH_BEERS';
export const FETCH_BEERS = Object.freeze(createFetchActionTypes(FETCH_BEERS_ACTION));

export const fetchBeers = (data) => {
    return {
        type: FETCH_BEERS_ACTION,
        $payload: {
            url: `https://api.punkapi.com/v2/beers?page=${data.page}&per_page=10`,
            onResponse: (response, meta, type) => {
                if (response.status !== 200) {
                    return false;
                }
            }
        }
    };
}
