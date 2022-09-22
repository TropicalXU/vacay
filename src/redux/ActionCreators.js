import * as ActionTypes from './ActionTypes';
import { LOCATIONS } from '../shared/locations';

export const addReview = (locationId, rating, author, review) => ({
    type: ActionTypes.ADD_REVIEW,
    payload: {
        locationId: locationId,
        rating: rating,
        author: author,
        review: review
    }
});


export const fetchLocations = () => (dispatch) => {
    dispatch(locationsLoading(true));

    setTimeout(() => {
        dispatch(addLocations(LOCATIONS));
    }, 2000);
}

export const locationsLoading = () => ({
    type: ActionTypes.LOCATIONS_LOADING
});

export const locationsFailed = (errMsg) => ({
    type: ActionTypes.LOCATIONS_FAILED,
    payload: errMsg
});

export const addLocations = (locations) => ({
    type: ActionTypes.ADD_LOCATIONS,
    payload: locations
});


