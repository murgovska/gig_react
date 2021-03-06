import { sportsConstants } from '../constants';

export function sports(state = {}, action) {
    switch (action.type) {
        case sportsConstants.GET_SPORTS_REQUEST:
            return {
                loading: true
            };
        case sportsConstants.GET_SPORTS_SUCCESS:
            return action.sports;
        case sportsConstants.GET_SPORTS_FAILURE:
            return {

            };
        default: 
            return state;
    }
}