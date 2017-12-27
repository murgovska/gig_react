import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../helpers';

import { Header } from '../../components/Header';
import { SportsContainer } from '../Sports';
import { LivebettingContainer } from '../Livebetting'


class App extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Router history={history}>
                    <div className="container-fluid">
                        <Route exact path="/sports" component={ SportsContainer } />
                        <Route exact path="/livebetting" component={ LivebettingContainer } />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { initialData } = state;
    return {
        initialData
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 