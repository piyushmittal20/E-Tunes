import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { songListReducer } from './reducers/songReducer';

const middleware = [thunk];

const reducers = combineReducers({
    songList: songListReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

export default store;
