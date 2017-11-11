import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './SearchBar.pcss';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textBoxVal: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event) {
        this.setState({textBoxVal: event.target.value});
    }

    handleSearchClick(event) {
        if(this.state.textBoxVal){
            this.props.searchForGif(this.state.textBoxVal);
        }
    }

    handleKeyDown(event) {
        if (event.keyCode === 13) {
            this.handleSearchClick(void 0);
        }
    }

    render() {
        return (
            <div styleName='search-bar'>
                <input
                    styleName='search-bar__input'
                    value={this.state.textBoxVal}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <a
                    styleName='search-bar__search-button'
                    onClick={this.handleSearchClick}
                >
                    <i styleName='search-bar__search-icon'/>
                </a>
            </div>
        )
    }
}


SearchBar.propTypes = {
    searchForGif: PropTypes.func,
};

export default CSSModules(SearchBar, styles, {allowMultiple: true});
