import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../helpers';
import { sportsActions } from '../../actions';
import * as _ from 'lodash';
import { Country } from '../../components/Country';


class SportsContainer extends React.Component{
    constructor(props){
        super(props);
        this.props.dispatch(sportsActions.getAllSports());
    }

    render() {
        console.log(this.props)
        if (!_.isUndefined(this.props.sports.sports)) {
            let sportsList = this.props.sports.sports.map(function(item, index) {
                // let active = (index === 0) ? 'active' : '';
                return (
                    <li key={item.sportName} className={"list-group-item justify-content-between"}>
                        {item.sportName}
                        <span  className="badge badge-default badge-pill">{item.numberOfEvents}</span>
                        <Country countries={item.countries} />
                    </li>
                );
            });
                return (
                    <div className="col-md-2 col-lg-2">
                        <ul className="list-group"> { sportsList } </ul>
                    </div>
                );
        } else {
            return (
                <div>No sports available!</div>
            );
        }
    }
}

function mapStateToProps(state) {
    const { sports, prematchCategory } = state;
    return {
        sports,
        prematchCategory
    };
}

const sports = connect(mapStateToProps)(SportsContainer);
export { sports as SportsContainer }; 