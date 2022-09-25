import * as ActionTypes from './ActionTypes';
import { LOCATIONS } from '../shared/locations';
import { REVIEWS } from '../shared/reviews';
import { HOSTS } from '../shared/hosts';


//review action//----------------------------------------------
export const addReview = (review) => ({
    type: ActionTypes.ADD_REVIEW,
    payload: review
});

export const postReview = (locationId, rating, author, review) => (dispatch) => {
    
    const newReview = {
        locationId: locationId,
        rating: rating,
        author: author,
        review: review
    }
    newReview.date = new Date().toISOString();

    return fetch(REVIEWS.review, {
        method: 'POST',
        body: JSON.stringify(newReview),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            const error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMsg = new Error(error.message);
        throw errMsg
    })
    .then(response => response.json())
    .then(response => dispatch(addReview(response)))
    .catch(error => {console.log('Post reviews ', error.message)
        alert('Your review could not be posted!\nError: ' + error.message);
    })
    
}


//locations action//-----------------------------------------
export const fetchLocations = () => (dispatch) => {
    dispatch(locationsLoading(true));

    setTimeout(() => {
        dispatch(addLocations(LOCATIONS));
    }, 2000);
}

export const fetchReviews = () => (dispatch) => {
    

    setTimeout(() => {
        dispatch(addReviews(REVIEWS));
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


//reviews action//--------------------------------------
export const reviewsFailed = (errMsg) => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMsg
});

export const addReviews = (reviews) => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
    
});




