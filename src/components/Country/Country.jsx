import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

class Country extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        if (!_.isUndefined(this.props.countries)){
            let countryList  = this.props.countries.map(function(country, index){
                return (
                    <li key={country.countryName}>{ country.countryName }</li>
                );
            });
            return (
                <ul className="countries">
                    { countryList }
                </ul>
            );
        }
        else {
            return (
                <div> </div>
            );
        }
    }
}

function mapStateToProps(state) {
    const { initialData } = state;
    return {
        initialData
    };
}

const country = connect(mapStateToProps)(Country);
export { country as Country }; 