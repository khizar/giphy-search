import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './GifObject.pcss';

const GifObject = ({gif}) =>
    <div styleName='gif'>
        <img
            styleName='gif__image'
            src={gif.content}
            key={gif.id}
        />
    </div>

GifObject.propTypes = {
    gif: PropTypes.object,
};

export default CSSModules(GifObject, styles, {allowMultiple: true});
