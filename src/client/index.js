import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './base.scss';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));