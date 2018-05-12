import { connect } from 'react-redux';
import Home from '../../components/Home';
import { fetchBeers } from '../../actions';

const HomeContainer = connect(
    (state) => state.beer,
    (dispatch) => ({
        fetchBeers: (page) => {
            dispatch(fetchBeers({
                page
            }));
        }
    })
)(Home);

export default HomeContainer;
