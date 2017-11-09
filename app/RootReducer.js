import { combineReducers } from 'redux';

import AppReducer from './redux/reducers/AppReducer';

const RootReducer = combineReducers({
    giphys: AppReducer
});

export default RootReducer;
