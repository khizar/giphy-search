import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './GifListing.pcss';
import GifObject from './../GifObject/GifObject';

const spinner = require('./../../assets/spinner.svg');

const  _renderGifs = (trendingGifs, togglePopup) => {
    return trendingGifs.map((gif) => {
        return <GifObject gif={gif} key={gif.id} togglePopup={togglePopup}/>;
    })
};

const GifListing = ({gifsList, isFetchingData, headline, togglePopup}) =>
    <section styleName="gifList">
        <label styleName='gifList__headline'>{headline}</label>

        <section styleName='gifList__content'>
        {isFetchingData &&
            <img styleName='gifList__spinner' src={spinner}/>
        }
        {!isFetchingData && _renderGifs(gifsList, togglePopup)}
        </section>
    </section>;

GifListing.defaultProps = {
    gifsList: []
}

GifListing.propTypes = {
    gifsList: PropTypes.array,
    isFetchingData: PropTypes.bool,
    headline: PropTypes.string,
    togglePopup: PropTypes.func
};

export default CSSModules(GifListing, styles, {allowMultiple: true});
