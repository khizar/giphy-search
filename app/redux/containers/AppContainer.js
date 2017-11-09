import { connect } from 'react-redux';

import App from '../../components/App/App';
import {getTrendingGifs} from '../actions/AppActions';
import {getIsFetchingData, getTrendingGifsFromState} from '../selectors/selectors';

const mapStateToProps = state => ({
    trendingGifs: getTrendingGifsFromState(state),
    isFetchingData: getIsFetchingData(state),
})

const mapDispatchToProps = dispatch => ({
    fetchTrendingGifs: () => {
        dispatch(getTrendingGifs());
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
