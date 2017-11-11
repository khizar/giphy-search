import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './App.pcss';
import GifListing from '../TrendingView/GifListing';
import SearchBar from './../SearchBar/SearchBar';
import SharePopupContainer from './../../containers/SharePopupContainer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sharePopupOpen: false,
            gifToBeSharedId: null,
        };

        this.toggleSharePopupState = this.toggleSharePopupState.bind(this);
    }

    componentDidMount() {
        this.props.fetchTrendingGifs();
    }

    toggleSharePopupState(id) {
        this.setState({
            sharePopupOpen: !this.state.sharePopupOpen,
            gifToBeSharedId: id,
        });
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
                    togglePopup={this.toggleSharePopupState}
                />
                {this.state.sharePopupOpen ?
                    <SharePopupContainer
                        text='Close Me'
                        closePopup={this.toggleSharePopupState}
                        id={this.state.gifToBeSharedId}
                    />
                    : null
                }
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
