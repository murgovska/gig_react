import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';

render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('app')
);