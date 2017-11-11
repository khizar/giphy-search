import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './GifObject.pcss';

class GifObject extends React.Component {
    constructor(props) {
        super(props);

        this.handleShareButtonClick = this.handleShareButtonClick.bind(this);
    }

    handleShareButtonClick() {
        const {gif, togglePopup} = this.props;
        togglePopup(gif.id);
    }

    render() {
        const {gif} = this.props;

        return (
            <div styleName='gif'>
                <img
                    styleName='gif__image'
                    src={gif.content}
                    key={gif.id}
                    onClick={this.handleShareButtonClick}
                />
            </div>
        )
    }
}


GifObject.propTypes = {
    gif: PropTypes.object,
    togglePopup: PropTypes.func
};

export default CSSModules(GifObject, styles, {allowMultiple: true});
