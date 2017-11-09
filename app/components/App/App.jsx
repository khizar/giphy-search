import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './App.pcss';
import GifListing from '../TrendingView/GifListing';
import SearchBar from './../SearchBar/SearchBar';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchTrendingGifs();
    }

    render() {
        const {isFetchingData, gifsList, searchForGif, headline} = this.props;
        return (
            <div styleName='app'>
                <SearchBar searchForGif={searchForGif}/>
                <GifListing
                    isFetchingData={isFetchingData}
                    gifsList={gifsList}
                    headline={headline}
                />
            </div>
        );
    }
}

App.propTypes = {
    fetchTrendingGifs: PropTypes.func,
    isFetchingData: PropTypes.bool,
    gifsList: PropTypes.array,
    searchForGif: PropTypes.func,
    headline: PropTypes.string
};

export default CSSModules(App, styles, { allowMultiple: true });
