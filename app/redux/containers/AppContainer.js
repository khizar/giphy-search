import { connect } from 'react-redux';

import App from '../../components/App/App';
import {getTrendingGifs, searchForGif} from '../actions/AppActions';
import {getIsFetchingData, getGifsFromState, getHeadline} from '../selectors/selectors';

const mapStateToProps = state => ({
    gifsList: getGifsFromState(state),
    isFetchingData: getIsFetchingData(state),
    headline: getHeadline(state)
});

const mapDispatchToProps = dispatch => ({
    fetchTrendingGifs: () => {
        dispatch(getTrendingGifs());
    },
    searchForGif: (query) => {
        dispatch(searchForGif(query));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
