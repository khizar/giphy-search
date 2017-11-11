import {createAction} from 'redux-actions';

import {GIPHY_API_KEY} from '../../constants/Constants';
const GphApiClient = require('giphy-js-sdk-core');
const client = GphApiClient(GIPHY_API_KEY);

export const setIsFetchingData = createAction('SET_IS_FETCHING_DATA', isFetching => isFetching);

export const getTrendingGifs = () => dispatch => {
    dispatch(setIsFetchingData(true));

    client.trending('gifs', {limit: 20})
        .then((response) => {
            const gifs = getGifsFromApiResponse(response);
            dispatch(setGifsToState(gifs));
            dispatch(setGifHeadline('Trending Gifs'));
            dispatch(setIsFetchingData(false));
        })
        .catch((err) => {
            console.log(err);
            dispatch(setIsFetchingData(false));
        });

};
export const setGifHeadline = createAction('SET_HEADLINE', headline => headline);
export const setGifsToState = createAction('SET_GIFS', gifs => gifs);

export const searchForGif = (query) => dispatch => {
    dispatch(setIsFetchingData(true));

    client.search('gifs', {q: query})
        .then((response) => {
            const gifs = getGifsFromApiResponse(response);
            dispatch(setGifsToState(gifs));
            dispatch(setGifHeadline('Search Results'));
            dispatch(setIsFetchingData(false));
        })
        .catch((err) => {
        console.log(err);
            dispatch(setIsFetchingData(false));
        })
}

function getGifsFromApiResponse(response) {
    return response.data.map((gif) => {
        return {
            id: gif.id,
            url: gif.url,
            content: gif.images.downsized.gif_url,
            shortUrl: gif.bitly_url,
        }
    });
}
