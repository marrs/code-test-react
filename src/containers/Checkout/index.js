import { connect } from 'react-redux';
import Checkout from '../../components/Checkout';

const CheckoutContainer = connect(
    (state) => ({ basket: state.shop.basket }),
    (dispatch) => ({
    })
)(Checkout);

export default CheckoutContainer;
