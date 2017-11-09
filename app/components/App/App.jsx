import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './App.pcss';
import Trending from './../TrendingView/Trending';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchTrendingGifs();
    }

    render() {
        const {isFetchingData, trendingGifs} = this.props;
        return (
            <div className="container">
                <Trending isFetchingData={isFetchingData} trendingGifs={trendingGifs}/>
            </div>
        );
    }
}

App.propTypes = {
    fetchTrendingGifs: PropTypes.func,
    isFetchingData: PropTypes.bool,
    trendingGifs: PropTypes.array,
};

export default CSSModules(App, styles, { allowMultiple: true });
