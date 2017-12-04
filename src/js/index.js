import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import '../sass/common.scss';
import MainLayout from "./containers/MainLayout";

import {Provider} from 'react-redux';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MainLayout />
        </Router>
    </Provider>
    , document.getElementById('app'));


