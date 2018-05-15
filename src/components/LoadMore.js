import React from 'react';
import PropTypes from 'prop-types';

const LoadMore = (props) => (<div className="loadMore">
    <div className={`loadMoreSpinner ${props.isLoading && 'isLoading'}`}></div>
    <button className="cta" onClick={props.loadMore.bind(null, props.currentPage + 1)}>Load more</button>
</div>);

export default LoadMore;
