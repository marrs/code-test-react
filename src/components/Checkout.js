import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
    let { basket } = props;
    var itemLength = Object.keys(basket).length;
    return <div>
        <h1>Checkout</h1>
        { itemLength ? 
            <table className="checkoutTable">
                <thead className="checkoutTableHeader">
                    <tr>
                        <th>ITEM</th>
                        <th>QTY</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    { Object.values(basket).map((item, idx) => {
                        return <tr key={idx}>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>£0.00</td>
                        </tr>
                    }) }
                </tbody>
            </table> :
            <div>
                <p>There are no items in your shopping basket</p>
                <Link to="/">Go shopping</Link>
            </div>
        }
    </div>
}

export default Checkout;
