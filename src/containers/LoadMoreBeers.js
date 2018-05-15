import React from 'react';
import { connect } from 'react-redux';

import { fetchBeers } from '../actions';
import LoadMore from '../components/LoadMore';

const LoadMoreBeersContainer = connect(
    (state) => ({
        currentPage: state.shop.page,
        isLoading: state.shop.isFetchingBeers
    }),
    (dispatch) => ({
        loadMore: (page) => {
            dispatch(fetchBeers({ page }));
        }
    })
)(LoadMore);

export default LoadMoreBeersContainer;
