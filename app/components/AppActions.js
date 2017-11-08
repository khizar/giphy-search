import {createAction} from 'redux-actions';

import {GIPHY_API_KEY} from '../constants/Constants';

export const getTestGif = () => (dispatch, getState) => {
    const GphApiClient = require('giphy-js-sdk-core')
    const client = GphApiClient(GIPHY_API_KEY);
    client.search('gifs', {'q': 'gosling'})
        .then((response) => {
            dispatch(setTest(response.data[0]));
        })
        .catch((err) => {
            console.log('*** Error:');

        });

}

export const setTest = createAction('SET_TEST', gif => gif);