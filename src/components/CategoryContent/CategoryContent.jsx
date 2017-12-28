import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

class CategoryContent extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        let category = this.props.prematchCategory.category;
        let events, selections, outcomes;
        if (!_.isUndefined (category)) {
            events = category.events.map(function (event) {
                selections = event.markets[0].selections.map(function (selection) {
                    return (
                        <th key={selection}>{selection}</th>
                    );
                });
                outcomes = event.markets[0].outcomes.map(function (outcome){
                    return (
                        <td key={outcome}>{outcome}</td>
                    );
                });
                return (
                <tr key={event.eventId}>
                    <td>{event.eventId}</td>
                    <td>{event.eventName}</td>
                    {outcomes}
                </tr>
                );
            });
            console.log ('Seletions- ', selections);
            return (
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th colSpan="5">{category.categoryName}</th>
                        </tr>
                        <tr>
                            <th> ID </th>
                            <th> Event </th>
                            {selections}
                        </tr>
                    </thead>
                    <tbody>
                        {events}
                    </tbody>
                </table>
            );
    }
        else {
            return (
                <div></div>
            );
        }
    }
}

function mapStateToProps(state) {
    return state;
}

const categoryContent = connect(mapStateToProps)(CategoryContent);
export { categoryContent as CategoryContent }; 