import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Global.scss'
import store from './dataredux/redux-store';
import reportWebVitals from './reportWebVitals';
import GlobalApp from './AppContainer';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <GlobalApp/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState())
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//https://codepen.io/jackrugile/pen/aCzHs - beautiful thing
//https://codepen.io/davidicus/details/emgQKJ - hover on buttons

