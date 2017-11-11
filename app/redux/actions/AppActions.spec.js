import {it, describe} from 'mocha';
import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import {
    getTrendingGifs, setGifHeadline, setGifsToState, setIsFetchingData
} from './AppActions';

describe('AppActions', () => {

    it('getTrendingGifs: it should return a function', () => {
        expect(getTrendingGifs()).to.be.a('function');
    });

    it('getTrendingGifs: right actions should be fired on successfully fetching gifs', done => {
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=ln0q9hBGZWNpEJxR6A0J74QgCJ28RKGE&limit=20&`;

        const payload = {
            data: [{
                id: 'id',
                url: 'url',
                bitly_url: 'bitly url',
                images: {
                    downsized: {
                        url: 'gif url'
                    },
                }
            }]
        };

        fetchMock.getOnce(url, {
            headers: {'content-type': 'application/json'},
            body: payload
        });

        const expectedActions = [
            setIsFetchingData(true),
            setGifsToState([{
                id: payload.data[0].id,
                url: payload.data[0].url,
                content: payload.data[0].images.downsized.url,
                shortUrl: payload.data[0].bitly_url,
            }]),
            setGifHeadline('Trending Gifs'),
            setIsFetchingData(false)
        ];

        const store = mockStore({events: []});
        store
            .dispatch(getTrendingGifs())
            .then(() => {
                expect(store.getActions()).to.deep.equal(expectedActions);
            })
            .then(done, done);
    });

    it('getTrendingGifs: right actions should be fired on failed fetching of trending gifs', done => {
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=ln0q9hBGZWNpEJxR6A0J74QgCJ28RKGE&limit=20&`;

        fetchMock.getOnce(url, {
            body: [],
            status: 400,
            headers: {'content-type': 'application/json'}
        });
        const expectedActions = [
            setIsFetchingData(true),
            setIsFetchingData(false)
        ];

        const store = mockStore({events: []});
        store
            .dispatch(getTrendingGifs())
            .then(() => {
                expect(store.getActions()).to.deep.equal(expectedActions);
            })
            .then(done, done);
    });

});
