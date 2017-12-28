import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { Category } from './Category/Category';

class Country extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount () {
        this.setState({
            selectedCategory: this.props.countries[0].categories[0]
        });
    }

    render() {
        if (!_.isUndefined(this.props.countries)){
            let countryList  = this.props.countries.map(function(country, index){
                return (
                    <li key={country.countryName}>{ country.countryName }
                        <Category categories={country.categories}/>
                    </li>
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
    const { selectedCategory } = state;
    return {
        selectedCategory
    };
}

const country = connect(mapStateToProps)(Country);
export { country as Country }; 