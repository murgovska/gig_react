import * as sportsApi from '../api/sports.api';

export const sportsService = {
    getAllSports
}

function getAllSports() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch (sportsApi.getAllSportsApi, requestOptions).then(handleResponse);
}

function handleResponse (response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}