import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux'
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from '../utils/localStorage-utils';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const rootReducer = combineReducers({
    counter: counterReducer ,
})

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
})

// @ts-ignore
window.store = store
