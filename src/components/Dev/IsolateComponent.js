import React from 'react';

import * as Components from '../';

function extractPropsFromQueryString(str) {
    if (str[0] === '?') {
        str = str.substr(1);
    }
    let queries = str.split('&');
    for (let i = 0; i < queries.length; ++i) {
        let query = queries[i];
        if (query.indexOf('props=') === 0) {
            return JSON.parse(window.decodeURIComponent(query.substr(6)));
        }
    }
    return {};
}

const IsolateComponent = (props) => {
    let { match, location } = props;
    var componentProps = extractPropsFromQueryString(location.search.substr(1));
    let SelectedComponent = Components[match.params.name];
    return <SelectedComponent { ...componentProps } />
}

export default IsolateComponent;
