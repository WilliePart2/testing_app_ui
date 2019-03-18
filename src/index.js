import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/App.css';
import 'typeface-roboto';
import { rootReducer } from "./modules/store";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import CssBaseline from '@material-ui/core/CssBaseline';

let store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline/>
        <App />
    </Provider>,
    document.getElementById('root')
);