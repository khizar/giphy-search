import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = Immutable({
    testGif: null
});

export default handleActions(
    {
        SET_TEST: (state, action) => {
            return state.set('testGif', action.payload);
        }
    },
    INITIAL_STATE
);
