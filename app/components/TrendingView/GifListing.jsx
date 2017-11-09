import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './GifListing.pcss';
import GifObject from './../GifObject/GifObject';

const spinner = require('./../../assets/spinner.svg');

const  _renderTrendingGifs = (trendingGifs) => {
    return trendingGifs.map((gif) => {
        return <GifObject gif={gif} key={gif.id}/>;
    })
};

const GifListing = ({gifsList, isFetchingData, headline}) =>
    <section styleName="trending">
        <label styleName='trending__headline'>{headline}</label>

        <section styleName='trending__content'>
        {isFetchingData &&
            <img styleName='trending__spinner' src={spinner}/>
        }
        {!isFetchingData && _renderTrendingGifs(gifsList)}
        </section>
    </section>;


GifListing.propTypes = {
    gifsList: PropTypes.array,
    isFetchingData: PropTypes.bool,
    headline: PropTypes.string,
};

export default CSSModules(GifListing, styles, {allowMultiple: true});
