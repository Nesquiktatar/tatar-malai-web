import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';
import sidebarReducer from './sidebar-reducer';
import appReducer from './app-reducer';

//Этот объект можно воспринимать как state
let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    sidebarPage: sidebarReducer,
    appPage: appReducer
})

/*let store = createStore(reducers, applyMiddleware(thunkMiddleware));*/

//Add this for chrome ReduxDevtools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

window.store = store;