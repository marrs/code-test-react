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

    describe(ADD_TO_BASKET, () => {
        let stubBasketPayload = {
            data: { productId: 1, name: 'foo', qty: 1 }
        };

        it("Adds an object to basket using its id as the key", () => {
            let result = shopReducer({ basket: {} }, action(ADD_TO_BASKET, stubBasketPayload));
            expect(result.basket[stubBasketPayload.data.productId]).toBeDefined();
        });

        it("Adds an object to basket containing id, name, and qty properties", () => {
            let result = shopReducer({ basket: {} }, action(ADD_TO_BASKET, stubBasketPayload));
            expect(result.basket[stubBasketPayload.data.productId]).toEqual(stubBasketPayload.data);
        });

        it("Throws an error if qty is missing", () => {
            expect(function() {
                shopReducer({ basket: {} }, action(ADD_TO_BASKET, {data: {productId: 1, name: 'foo'}}));
            }).toThrow();
        });

        it("Throws an error if name is missing", () => {
            expect(function() {
                shopReducer({ basket: {} }, action(ADD_TO_BASKET, {data: {productId: 1, qty: 1}}));
            }).toThrow();
        });

        it("Throws an error if productId is missing", () => {
            expect(function() {
                shopReducer({ basket: {} }, action(ADD_TO_BASKET, {data: {name: 'foo', qty: 1}}));
            }).toThrow();
        });

        it("Adds quantities if a product is added that is already in basket", () => {
            let existingItems = { basket: {1: { qty: 3}} };
            let newItem = { productId: 1, name: 'foo', qty: 2 };

            let result = shopReducer(existingItems, action(ADD_TO_BASKET, { data: newItem }));
            expect(result.basket[1].qty).toBe(5);
        });
    });
});
