import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../helpers';

class Header extends React.Component{
    constructor(){
        super();

    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <div className="col-md-12 header">
                    <nav className="navbar navbar-light col-sm-6 col-md-4 col-lg-3">
                        <Link to="/sports" className="navbar-brand">Sports</Link>
                        <Link to="/livebetting" className="navbar-brand">Livebetting</Link>
                    </nav>
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

const header = connect(mapStateToProps)(Header);
export { header as Header }; 