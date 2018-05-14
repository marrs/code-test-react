import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import shopReducer from './shop';
import devReducer from './dev';

export default combineReducers({
    router: routerReducer,
    shop: shopReducer,
    dev: devReducer
});
