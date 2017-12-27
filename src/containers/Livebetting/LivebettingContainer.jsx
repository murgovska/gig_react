import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../helpers';


class LivebettingContainer extends React.Component{
    constructor(){
        super();

    }

    render() {
        return (
            <div> Livebetting </div>
        );
    }
}

function mapStateToProps(state) {
    const { initialData } = state;
    return {
        initialData
    };
}

const livebetting = connect(mapStateToProps)(LivebettingContainer);
export { livebetting as LivebettingContainer }; 