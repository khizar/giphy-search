import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Trending.pcss';

const spinner = require('./../../assets/spinner.svg');
const spinnerStyles = {
    width: '40px',
    height: '40px',
    margin: '40px auto'
};

const  _renderTrendingGifs = (trendingGifs) => {
    return trendingGifs.map((gif) => {
        return <img src={gif.content} key={gif.id}/>;
    })
};

const Trending = ({trendingGifs, isFetchingData}) =>
    <section styleName="main">
        {
            isFetchingData && <img src={spinner} style={spinnerStyles}/>
        }
        {!isFetchingData && _renderTrendingGifs(trendingGifs)}
    </section>;


Trending.propTypes = {
    trendingGifs: PropTypes.array,
    isFetchingData: PropTypes.bool,
};

export default CSSModules(Trending, styles, {allowMultiple: true});
