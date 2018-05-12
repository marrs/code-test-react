import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import beerReducer from './beer';

export default combineReducers({
    router: routerReducer,
    beer: beerReducer
});
