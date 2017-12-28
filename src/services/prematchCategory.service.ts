import * as sportsApi from '../api/sports.api';

export const prematchCategoryService = {
    getPrematchCategory
}

function getPrematchCategory() {
    const requestOptions = {
        method: 'GET'
    }

    return fetch (sportsApi.getPrematchCategoryApi, requestOptions).then(handleResponse);
}

function handleResponse (response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}