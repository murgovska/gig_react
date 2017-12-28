import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../../helpers';
import * as _ from 'lodash';

class Category extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        if (!_.isUndefined(this.props.categories)) {
            let categories = this.props.categories.map(function(category, index) {
                return (
                    <li key={category.categoryName}>{category.categoryName}</li>
                );
            });
            return (
                <ul>
                    {categories}
                </ul>
            );
        } else {
            return (
                <div></div>
            );
        }
}
}

function mapStateToProps(state) {
    return state;
}

const category = connect(mapStateToProps)(Category);
export { category as Category }; 
