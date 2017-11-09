import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = Immutable({
    gifs : [],
    isFetchingData: false,
    headline: null
});

export default handleActions(
    {
        SET_GIFS: (state, action) => {
            return state.set('gifs', action.payload);
        },
        SET_IS_FETCHING_DATA: (state, action) => {
            return state.set('isFetchingData', action.payload);
        },
        SET_HEADLINE: (state, action) => {
            return state.set('headline', action.payload);
        }
    },
    INITIAL_STATE
);
