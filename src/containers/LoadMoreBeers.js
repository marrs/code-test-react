import React from 'react';
import { connect } from 'react-redux';

import { fetchBeers } from '../actions';
import LoadMore from '../components/LoadMore';
import store from '../store';

const LoadMoreBeersContainer = connect(
    (state) => ({
        page: state.shop.page,
        isLoading: state.shop.isFetchingBeers
    }),
    (dispatch) => ({
        loadMore: () => {
            dispatch(fetchBeers({ page: ++store.getState().shop.page }));
        }
    })
)(LoadMore);

export default LoadMoreBeersContainer;
