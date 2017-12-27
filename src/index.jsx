import React from 'react';
import { render } from 'react-dom';
import { store } from './helpers';
import { Provider } from 'react-redux';
import { App } from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);