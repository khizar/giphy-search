import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.pcss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            someState: 'true'
        };
    }

    componentDidMount() {
        this.props.fetchGif();
    }
    render() {
        return (
            <div className="container">
                <label styleName="main">hello flexbox</label>
                {this.props.gif && <img src={this.props.gif.images.fixed_height.gif_url || ''} />}
            </div>
        );
    }
}

export default CSSModules(App, styles, { allowMultiple: true });
