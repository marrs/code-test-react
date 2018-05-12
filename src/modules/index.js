import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import beerReducer from './beer';
import devReducer from './dev';

export default combineReducers({
    router: routerReducer,
    beer: beerReducer,
    dev: devReducer
});
