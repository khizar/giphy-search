import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './components/AppContainer';
import CreateStore from './CreateStore';
import RootReducer from './RootReducer';

const store = CreateStore(RootReducer);
if (module.hot) {
    module.hot.accept('./RootReducer', () => {
        const nextRootReducer = require('./RootReducer').default;
        store.replaceReducer(nextRootReducer);
    });
}

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('myApp')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => render(<App/>));
}
