import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './SharePopup.pcss';

class SharePopup extends React.Component {
    constructor(props) {
        super(props);

        this.handleCloseClick = this.handleCloseClick.bind(this);
    }

    handleCloseClick() {
        this.props.closePopup(null);
    }

    handleShareToTwitterClick(gifUrl){
        const text = 'Check this gif out';
        const twitterIntent = `https://twitter.com/intent/tweet?text=${text}&url=${gifUrl}`;
        window.open(twitterIntent,'_blank');
    }

    render() {
        const {gif} = this.props;

        return (
            <div styleName='popup'>
                <div styleName='popup__popup_inner'>
                    <img src={gif.content} styleName='popup__gif'/>
                    <section styleName='popup__share-box'>
                        <input
                            styleName='popup__share-link-input'
                            value={gif.shortUrl}
                            disabled
                        />
                        <a
                            styleName='popup__search-button'
                            onClick={this.handleShareToTwitterClick.bind(this, gif.url)}
                        >
                            <i styleName='popup__search-icon'/>
                        </a>
                    </section>
                    <button
                        styleName='popup__close-button'
                        onClick={this.handleCloseClick}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }
}

SharePopup.PropTypes = {
    closePopup: PropTypes.func
};

export default CSSModules(SharePopup, styles, {allowMultiple: true});
