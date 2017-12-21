import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component{
    constructor(){
        super();

    }

    render() {
        return (
            <div>App started</div>
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