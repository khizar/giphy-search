import {createAction} from 'redux-actions';

import {GIPHY_API_KEY} from '../../constants/Constants';
const GphApiClient = require('giphy-js-sdk-core');
const client = GphApiClient(GIPHY_API_KEY);

export const setIsFetchingData = createAction('SET_IS_FETCHING_DATA', isFetching => isFetching);

export const getTrendingGifs = () => (dispatch, getState) => {
    dispatch(setIsFetchingData(true));

    client.trending('gifs', {limit: 20})
        .then((response) => {
            console.log(response.data);
            const trendingGifs = response.data.map((gif) => {
                return {
                    id: gif.id,
                    url: gif.url,
                    content: gif.images.original.gif_url
                }
            });

            dispatch(setTrendingGifs(trendingGifs));
            dispatch(setIsFetchingData(false));
        })
        .catch((err) => {
            console.log('*** Error:');
            dispatch(setIsFetchingData(false));
        });

};

export const setTrendingGifs = createAction('SET_TRENDING_GIFS', gifs => gifs);