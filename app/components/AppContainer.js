import { connect } from 'react-redux';

import App from './App';
import {getTestGif} from './AppActions';

const mapStateToProps = state => ({
    gif: state.testReducer.testGif
})

const mapDispatchToProps = dispatch => ({
    fetchGif: () => {
        dispatch(getTestGif());
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
