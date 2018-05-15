import shopReducer from './shop';
import {
    FETCH_BEERS,
    ADD_TO_BASKET
} from '../actions';

function action(type, data) {
    return {
        ...data,
        type
    };
}

describe('shop reducer', () => {

    let stubPayload = {
        meta: { page: 1 },
        data: []
    };

    let stubState = {
        productData: []
    };

    describe(FETCH_BEERS.request, () => {
        it("sets a flag in shop state to indicate that beers are being fetched", () => {
            let result = shopReducer({}, action(FETCH_BEERS.request, {}));
            expect(result.isFetchingBeers).toBeTruthy();
        });
    });

    describe(FETCH_BEERS.success, () => {

        it("sets a flag in shop state to indicate that beers are not being fetched", () => {
            let result = shopReducer({...stubState}, action(FETCH_BEERS.success, {...stubPayload}));
            expect(result.isFetchingBeers).toBeFalsy();
        });

        it("updates the page that has been fetched", () => {
            let result = shopReducer({ page: 1, ...stubState}, action(FETCH_BEERS.success, { ...stubPayload, meta: { page: 2 }}));
            expect(result.page).toBe(2);
        });
    });

    describe(FETCH_BEERS.failure, () => {
        it("sets a flag in shop state to indicate that beers are not being fetched", () => {
            let result = shopReducer({...stubState}, action(FETCH_BEERS.failure, {...stubPayload}));
            expect(result.isFetchingBeers).toBeFalsy();
        });
    });
});
