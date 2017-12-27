import { prematchCategoryConstants } from '../constants';

export function prematchCategory (state = {}, action) {
    switch (action.type) {
        case prematchCategoryConstants.GET_CATEGORY_REQUEST:
            return {
                loadingCategory: true
            };
        case prematchCategoryConstants.GET_CATEGORY_SUCCESS:
            return {
                category: action.category
            };
        case prematchCategoryConstants.GET_CATEGORY_FAILURE:
            return {

            };
        default:
            return state;
    }
}