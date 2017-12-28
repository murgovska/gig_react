import { prematchCategoryConstants } from '../constants';
import { prematchCategoryService } from '../services';
import { history } from '../helpers';

export const prematchCategoryActions = {
    getPrematchCategory
};

function getPrematchCategory () {
    return dispatch => {
        dispatch(request());

        prematchCategoryService.getPrematchCategory().then(
            category => {
                dispatch(success(category));
            }, error => {
                dispatch(failure (error));
            }
        );
    }

    function request () {
        return {
            type: prematchCategoryConstants.GET_CATEGORY_REQUEST
        }
    }

    function success (category) {
        return {
            type: prematchCategoryConstants.GET_CATEGORY_SUCCESS, category
        }
    }

    function failure (error) {
        return {
            type: prematchCategoryConstants.GET_CATEGORY_FAILURE, error
        }
    }
}