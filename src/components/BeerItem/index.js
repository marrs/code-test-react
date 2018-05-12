import React from 'react';
import PropTypes from 'prop-types';

const BeerItem = (props) => {
    return <div className="beerItem">
        <img height="300" alt="" src={props.imageUrl}/>
        <h3>{props.name}</h3>
        <h4>{props.tagline}</h4>
        <p className="description">{props.description}</p>
        <table>
            <tbody>
                <tr>
                    <th>ABV</th>
                    <td>{props.abv}%</td>
                </tr>
            </tbody>
        </table>
    </div>

}

export default BeerItem;

BeerItem.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
