import { connect } from 'react-redux';
import Home from '../../components/Home';
import { fetchBeers, addToBasket } from '../../actions';

const HomeContainer = connect(
    (state) => state.shop,
    (dispatch) => ({
        fetchBeers: (page) => {
            dispatch(fetchBeers({
                page
            }));
        },
        addToBasket: (productItem) => {
            dispatch(addToBasket(productItem));
        }
    })
)(Home);

export default HomeContainer;
