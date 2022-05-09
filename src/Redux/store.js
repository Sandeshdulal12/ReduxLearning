import {createStore, combineReducers, applyMiddleware} from 'redux' ;
import { todos, isLoading } from './reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    );
