import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = Immutable({
    trendingGifs : [],
    isFetchingData: false
});

export default handleActions(
    {
        SET_TRENDING_GIFS: (state, action) => {
            return state.set('trendingGifs', action.payload);
        },
        SET_IS_FETCHING_DATA: (state, action) => {
            return state.set('isFetchingData', action.payload);
        }
    },
    INITIAL_STATE
);
