import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import restMiddlewareCreator from 'redux-fetch-middleware';
import rootReducer from './modules';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history), restMiddlewareCreator({
    suffix: ['REQUEST', 'SUCCESS', 'FAILURE'],
    // if `debug` is true, then in reducer `action.meta.$requestOptions`
    debug: true,
    responseType: 'json',
    fetchOptions: {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
})];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);
