import { connect } from 'react-redux';

import SharePopup from '../components/SharePopup/SharePopup';
import {getTrendingGifs, searchForGif} from '../redux/actions/AppActions';
import {getGifById} from '../redux/selectors/selectors';

const mapStateToProps = (state, ownProps) => ({
    gif: getGifById(ownProps.id, state)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SharePopup);
