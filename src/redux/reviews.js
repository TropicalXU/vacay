import * as ActionTypes from './ActionTypes';

export const Reviews = (state = {
    errMsg: null,
    reviews: []

}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_REVIEWS:
            return {...state, isLoading: false, errMsg: null, reviews: action.payload };
        
        case ActionTypes.REVIEWS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload, reviews: [] };

        case ActionTypes.ADD_REVIEW:
            const review = action.payload;
            return{...state, review: state.reviews.concat(review)};
        default:
            return state;

     
    }
};