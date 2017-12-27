import { sportsConstants } from '../constants';
import { sportsService } from '../services';
import { history } from '../helpers';
// import { error } from 'util';

export const sportsActions = {
    getAllSports
};


function getAllSports () {
    return dispatch => {
        dispatch(request());

        sportsService.getAllSports().then(
            sports => {
                dispatch(success(sports));
            }, error => {
                dispatch(failure (error));
            }
        );
    }

    function request () {
        return {
            type: sportsConstants.GET_SPORTS_REQUEST
        }
    }

    function success (sports) {
        return {
            type: sportsConstants.GET_SPORTS_SUCCESS, sports
        }
    }

    function failure (error) {
        return {
            type: sportsConstants.GET_SPORTS_FAILURE, error
        }
    }
}